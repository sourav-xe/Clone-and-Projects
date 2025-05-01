import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = newClient()
    account;

    constructor() {
        this.client 
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId) ;// Your project ID
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //redrect to login page
                return this.login({email, password});
            }
            else {
                return userAccount;
            }
            return response;
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
           
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }
}

const authService = new AuthService() 
export default authService