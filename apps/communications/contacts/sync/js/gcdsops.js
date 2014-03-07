'use strict';


// Class for working with the Global Contacts DataStore (GCDS).
// This class will deal with the object keeped, that follow
// this structure:
// {
//    "tel": [<tel1>, <tel2>, <tel3>],
//    "contacts": [
//        {"store": <store manifest>, "uuid": <uuid in original store>},
//        { ... }
//    ]
// }
//

var GCDSOps = (function GCDSOps() {

  var store = null;
  var DS_NAME = 'aggregated_contacts';

  var INDEX_ID = 1;
  var isIndexDirty = false;
  var index;

  var init = function init() {
    if (!navigator.getDataStores) {
      return Promise.reject(null);
    }
    if (store !== null) {
      return Promise.resolve(store);
    }

    var promise = new Promise(function(resolve, reject) {
      navigator.getDataStores(DS_NAME).then(function(stores) {
        store = stores[0];
        resolve(store);
      }, reject);
    });

    promise.then(loadIndex);

    return promise;
  };

  function createIndex() {
    return {
      // By tel number and all its possible variants
      // (We are not supporting dups right now)
      byTel: Object.create(null),
      // Prefix tree for enabling searching by partial tel numbers
      treeTel: [],
      // Will contain all the index of contacts that come from a
      // specific store.
      byStore: Object.create(null),
      // Index by store and external uid
      byExternalUid: Object.create(null)
    };
  }

  function setIndex(obj) {
    isIndexDirty = false;
    index = (obj || createIndex());
  }

  function loadIndex() {
    return new Promise(function(resolve, reject) {
      store.get(INDEX_ID).then(function(idx) {
        setIndex(idx);
        resolve(idx);
      }, reject);
    });
  }

  function getContactIndex(contact, originStore) {
    return contact.uid + '_' + originStore.owner;
  }

  function indexByPhone(obj, idx) {
    if (Array.isArray(obj.tel)) {
      obj.tel.forEach(function(aTel) {
        var variants = SimplePhoneMatcher.generateVariants(aTel.value);

        variants.forEach(function(aVariant) {
          index.byTel[aVariant] = newId;
        });
        // To avoid the '+' char
        TelIndexer.index(index.treeTel, aTel.value.substring(1),
         newId);
      });
    }
  }

  function indexByStore(contact, originStore) {

  }

  function indexByExternalUid(contact, originStore) {

  }

  var add = function add(obj, originStore) {
    return new Promise(function(resolve, reject) {
      var key = getContactIndex(obj, originStore);
      var data = [{
        uid: obj.uid,
        origin: originStore.owner
      }];
      store.add(data, key).then(function() {
        indexByPhone(obj, key);
        indexByStore(obj, originStore);
        indexByExternalUid(obj, originStore);
        resolve(data);
      }, reject);
    });
  };

  return {
    init: init,
    add: add
  };

})();

window.GCDSOps = GCDSOps;
