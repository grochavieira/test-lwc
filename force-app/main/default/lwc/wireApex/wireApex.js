import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
  
export default class WireApex extends LightningElement {
  accounts;
  error;
    
  @wire(getAccountList)
  wiredAccounts({ error, data }) {
      console.log('data => ', data);
      console.log('error =>', error);
    if(data) {
      this.accounts = data;
      this.error = undefined;
    } else if(error) {
      this.error = error;
      this.accounts = undefined;
    }
  }
}