public class dyanmicSearchController {
	@AuraEnabled
    public static List<String> getObjects(){
        List<Schema.sObjectType> objList = Schema.getGlobalDescribe().Values();
        List<String> objectNames = new List<String>();
        for(Schema.sObjectType obj : objList){
            objectNames.add(''+obj);
        }
        return objectNames;
    }
    
    @AuraEnabled
    public static List<String> getFields(String objectName){
        SObjectType accountType = Schema.getGlobalDescribe().get(objectName);
        Map<String,Schema.SObjectField> mfields = accountType.getDescribe().fields.getMap();
        List<String> fields = new List<String>();
        for(Schema.SObjectField field : mfields.values()){
            fields.add(String.valueOf(field));
        }
        return fields;
    }

    public static void sample(){
        System.debug('this is a test');
    }
}