import { LightningElement, api } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.lastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.email';
import PHONE_FIELD from '@salesforce/schema/Contact.phone';
export default class CreateContactRecord extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields =[FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, PHONE_FIELD];
    @api recordId;
    @api objectApiName

    
    }
