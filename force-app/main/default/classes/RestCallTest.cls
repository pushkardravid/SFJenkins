public class RestCallTest {
    public void makeGetCallout() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://ira4e1f5w5.execute-api.us-east-2.amazonaws.com/dev/getAllRoles');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserializes the JSON string into collections of primitive data types.
            List<Object> results = (List<Object>) JSON.deserializeUntyped(response.getBody());
            // Cast the values in the 'animals' key as a list
            for(Object result:results){
                Map<String, Object> res = (Map<String, Object>) result;
                String role = (String) res.get('name');
                System.debug(role);
            }
        }
    }  
}