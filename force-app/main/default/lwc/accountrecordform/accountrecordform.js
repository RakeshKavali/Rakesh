import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import BILLINGADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';
export default class Accountrecordform extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields =[NAME_FIELD, ANNUALREVENUE_FIELD, BILLINGADDRESS_FIELD];
    handleSuccess(event){
        title:"Account has been created successfully !";
        message: "Account Created ";
        variant: "success";
    }
}