import {smartstore, smartsync} from 'react-native-force';

it('test multiple global stores', () => {
   var storeConfig1 = {'storeName':'GLBLDB1','isGlobalStore':true};
   var storeConfig2 = {'storeName':'GLBLDB2','isGlobalStore':true};

   var indexes = [{path:"Name", type:"string"},{path:"Id", type:"string"}];
   var storeConfig1_SoupName = storeConfig1.storeName + "_Soup";
   var storeConfig2_SoupName = storeConfig2.storeName + "_Soup";
   smartstore.removeAllGlobalStores();
   smartstore.registerSoup(storeConfig1, storeConfig1_SoupName, indexes);
   smartstore.registerSoup(storeConfig2, storeConfig2_SoupName, indexes);
   smartstore.getAllGlobalStores((result) => {expect(result).toBe(3);}, () => {throw "test failed"});
   smartstore.removeStore(storeConfig1);
   smartstore.removeStore(storeConfig2);
   smartstore.getAllGlobalStores((result) => {expect(result).toBe(2)}, () => {throw "test failed"});
});
