({
    init: function (cmp, event, helper) {
        console.log("I am in Init");
        helper.getAllBusinessCenters(cmp);
    },
    getBusinessCenterDetails: function (cmp, event, helper) {
        var bc_data = cmp.find("bc_element").get("v.value");
        helper.getBusinessCenterDetails(cmp, bc_data);
    },
    handleSectionToggle: function (cmp, event) {
        var openSections = event.getParam('openSections');

        if (openSections.length === 0) {
            cmp.set('v.activeSectionsMessage', "All sections are closed");
        } else {
            cmp.set('v.activeSectionsMessage', "Open sections: " + openSections.join(', '));
        }
    },
    getPersonWithBCenter: function(cmp,event,helper){
		 console.log("I am in getPersonWithBCenter ");
        var bc_num = cmp.find("bc_element").get("v.value");
        helper.getPersonWithBCenter(cmp,bc_num); 
        cmp.set('v.columns', [
            {label: 'First Name', fieldName: 'first_name', type: 'text'},
            {label: 'Last Name', fieldName: 'last_name', type: 'text'},
            {label: 'EID', fieldName: 'eid', type: 'text'},
            {type: "button", typeAttributes: {
                label: 'View More',
                name: 'View',
                title: 'View Advisor details',
                disabled: false,
                value: 'View More',
                iconPosition: 'left'
            }}
        ]);

    },
    toggleModal : function(cmp,event,helper){
        helper.toggleModalC(cmp);
    },
    viewRecord : function(component, event, helper) {
        var recId = event.getParam('row').eid;
        var advisorList = component.get("v.advList");
        var selectedAdvisor = advisorList.filter(function(advisor){
            return advisor['eid'] == recId;
        })[0];
        component.set("v.adv_Age", selectedAdvisor['age']);
        component.set("v.adv_Class_01_Year", selectedAdvisor['class_01_year']);
        component.set("v.adv_Eid", selectedAdvisor['eid']);
        component.set("v.adv_First_Name", selectedAdvisor['first_name']);
        component.set("v.adv_Last_Name", selectedAdvisor['last_name']);
        component.set("v.adv_Is_Disabled", selectedAdvisor['is_disabled']);
        component.set("v.adv_Is_Manager", selectedAdvisor['is_manager']);
        component.set("v.adv_Is_Minority", selectedAdvisor['is_minority']);
        component.set("v.adv_Is_Recruit_Credit", selectedAdvisor['is_recruit_credit']);
        component.set("v.adv_Production_Months", selectedAdvisor['production_months']);
        component.set("v.adv_Type_Code", selectedAdvisor['type_code']);
        component.set("v.adv_Years_Of_Service", selectedAdvisor['years_of_service']);
        component.set("v.adv_Role", selectedAdvisor['role']);
        helper.toggleModalC(component);
    }
})