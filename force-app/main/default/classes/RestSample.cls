public class RestSample {

    @AuraEnabled
    public static Integer getQuote(Integer age, Integer weight, Integer coverageAmt){
        Integer coverage = 0;
        String endpoint = 'https://www.principal.com/ind/api/marketing/life-insurance-calculator/coverage-options?coverageNeeds={"valid":true,"id":0,"name":"assessment_new","funeral":{"amount":20000},"debt":{"amount":0},"collegeExpenses":{"numberOfChildren":1,"collegeType":"COLLEGE4PUBLIC","amount":0},"income":{"annually":true,"amount":"","wagePerHour":"","hoursPerWeek":"","years":10},"asset":{"savings":"","payout":""},"insured":{"age":'+ age +',"gender":"Male","zip":"50309","weight":'+ weight +',"feet":6,"inches":0,"tobacco":"never"},"coverage":{"type":"term10","amount":'+ coverageAmt +'},"isTermProduct":true,"isPermanentProduct":false}';
        System.debug(endpoint);
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        request.setHeader('CustomHeader', 'LifeCalculator');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() != 200) {
            System.debug('The status code returned was not expected: ' +
                response.getStatusCode() + ' ' + response.getStatus());
        } else {
            Map<String, Object> results = (Map<String, Object>) 
            JSON.deserializeUntyped(response.getBody());
            coverage = Integer.valueOf(results.get('tenYrCoveragePremium'));
            System.debug(coverage);
        }
        return coverage;
    }
}