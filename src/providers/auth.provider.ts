import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { ParseUserModel } from '../models/parse-user.model';
import { Mixpanel } from '@ionic-native/mixpanel';

declare const require: any;
const shortid = require('shortid');

declare const Taplytics: any;

@Injectable()
export class AuthProvider {
    workouts = [];

    constructor(private mixpanel: Mixpanel) {}

    async signin(email, password): Promise<any> {
        let ParseUser = await Parse.User.logIn(email, password);
        this.setAnalyticsUser(email);

        return ParseUser;
    }

    /**
     * Gets the user id in GA calls.
     */
    setAnalyticsUser(email) {
        this.mixpanel.identify(email);
        Taplytics.identify({ email });
    }

    /**
     * Generate a new user with random username
     */
    async createRandomUser() {
        let user = new Parse.User();

        user.set('password', shortid.generate());
        user.set('username', shortid.generate());

        let ParseUser = await user.signUp();
        this.setAnalyticsUser(ParseUser.id);

        return ParseUser;
    }

    async signup(email, password): Promise<any> {
        let user = new Parse.User();

        user.set('email', email);
        user.set('password', password);
        user.set('username', email);

        let ParseUser = await user.signUp();
        this.setAnalyticsUser(ParseUser.id);

        return ParseUser;
    }

    logout(): Promise<any> {
        this.mixpanel.reset();
        return Parse.User.logOut();
    }

    async currentUser(): Promise<any> {
        let user = await Parse.User.currentAsync();

        return user ? new ParseUserModel(user) : null;
    }
}
