({
    getAllBusinessCenters : function(component) {
        var endpoint = component.get("v.endpoint") + "/getAllBusinessCenters";
        console.log(endpoint);
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            var resp = JSON.parse(this.responseText);
              resp.splice(0, 0, {"name":"Select a value from dropdown"});
            component.set("v.bcList", resp);
              var spinner = component.find("mySpinner");
        $A.util.toggleClass(spinner, "slds-hide");
          }
        });
        
        xhr.open("GET", endpoint);
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        
        xhr.send(data);
		
	},
     getBusinessCenterDetails : function(component, bc_number){
        var bc_list = component.get("v.bcList");
        var bc = this.getBusinessCenter(bc_list, bc_number)[0];
        component.set("v.bc_address", bc['address']);
        component.set("v.bc_number", bc['bc_number']);
        component.set("v.bc_city", bc['city']);
        component.set("v.bc_state", bc['state']);
    },
    getBusinessCenter: function(list, data){
        return list.filter(function(element){
            return element['bc_number'] == data;
        });
    },
    getPersonWithBCenter: function(component, bc_num){
        //this.toggleModalC(component);
         var spinner = component.find("mySpinner");
        $A.util.toggleClass(spinner, "slds-hide");
        var endpoint = component.get("v.endpoint") + "/getPersonWithBCenter/" + bc_num;
        console.log(endpoint);
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;       
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            var resp = JSON.parse(this.responseText);
              var advListArray = [];
              resp.forEach(function(elem){
                  var personElem = elem['person'];
                  personElem['role'] = elem['role'];
                  advListArray.push(personElem);
              });
              component.set("v.advList", advListArray);
              component.set("v.data",advListArray);
               var spinner = component.find("mySpinner");
        $A.util.toggleClass(spinner, "slds-hide");
          }
        });       
        xhr.open("GET", endpoint);
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "7217b743-2fe9-4bbe-8625-6df1ed2b7eb8");      
        xhr.send(data);      
    },
    toggleModalC: function(component){
        component.set("v.showModal",!component.get("v.showModal"));
    }
})