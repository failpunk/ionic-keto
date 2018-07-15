import { Component } from '@angular/core';
import {
    ViewController,
} from 'ionic-angular';
import { ConfigProvider } from '../../providers/config.provider';


@Component({
    selector: 'privacy-modal',
    template: `
    <ion-header>
    
        <ion-navbar>
            <ion-buttons start>
              <button ion-button (click)="dismiss()">Close</button>
            </ion-buttons>
        </ion-navbar>
        
    </ion-header>

    <ion-content padding>

    <h2 id="privacy">
    <b>{{config.APP_NAME}} Privacy Policy</b>
</h2>
<p>At {{config.WEBSITE_SHORT}}, we want you to know how we collect, use, share, and protect information about you. By interacting with
    {{config.WEBSITE_SHORT}} through our website and mobile applications, you consent to the use of information that is collected
    or submitted as described in this Privacy Policy.</p>
<p>We may change or add to this Privacy Policy, so we encourage you to review it periodically. By using this site or application,
    you agree to the collection, use, and transfer of your data as described in this Privacy Policy. We may collect your
    personal information from, transfer it to, and store and process it in the United States and other countries outside
    of where you live. If you do not want your information to be collected, used, and transferred as described by this
    policy, you may revoke your consent to our Privacy Policy. To revoke your consent, please e-mail {{config.CONTACT_EMAIL}}.
    If you revoke your consent, your account and profile information will be removed from our website.</p>
<p>Information collected on our sites and applications is stored in the United States; therefore, your information may become
    subject to U.S. law. By using our website or mobile applications, you consent to the transfer of your data overseas
    and across borders, and from your country or jurisdiction to other countries or jurisdictions around the world. The
    laws governing data in your home country may differ from those in the countries to which data is transferred. By
    accessing and using our website and mobile applications, you consent to the transfer of your data in this manner.</p>
<h3>
    <b>Scope of this Policy</b>
</h3>
<p>This policy applies to information we collect or use on sites and applications owned or controlled by {{config.WEBSITE_SHORT}} or
    its affiliates (“{{config.WEBSITE_SHORT}}”). This policy applies to all of the services offered by {{config.WEBSITE_SHORT}} and its affiliates,
    including services {{config.WEBSITE_SHORT}} provides on mobile devices.</p>
<p>Our Privacy Policy does not apply to services offered by other companies or individuals, including products or sites
    linked from our services. Our Privacy Policy does not cover the information practices of other companies and organizations
    who advertise our services, and who may use cookies, pixel tags, and other technologies to serve and offer relevant
    ads.</p>
<h3>
    <b>{{config.WEBSITE_SHORT}} and the EU – U.S. Privacy Shield</b>
</h3>
<p>{{config.WEBSITE_SHORT}} complies with the EU – U.S. Privacy Shield Framework for personal information transferred to the United
    State from users in the EU. Under the Framework, {{config.WEBSITE_SHORT}} is subject to the Federal Trade Commission’s enforcement
    powers. {{config.WEBSITE_SHORT}} complies with the EU-US Privacy Shield Framework as set forth by the US Department of Commerce
    regarding the collection, use, and retention of personal information from European Union member countries. {{config.WEBSITE_SHORT}}
    has certified that it adheres to the Privacy Shield Principles of Notice, Choice, Accountability for Onward Transfer,
    Security, Data Integrity and Purpose Limitation, Access, and Recourse, Enforcement and Liability. If there is any
    conflict between the policies in this privacy policy and the Privacy Shield Principles, the Privacy Shield Principles
    shall govern. To learn more about the Privacy Shield program, and to view our certification page, please visit
    <a
        href="https://www.privacyshield.gov/" hidefocus="true" style="outline: none;">https://www.privacyshield.gov/</a>.</p>
<p>In compliance with the EU-US Privacy Shield Principles, {{config.WEBSITE_SHORT}} commits to resolve complaints about your privacy
    and our collection or use of your personal information. European Union individuals with inquiries or complaints regarding
    this privacy policy should first contact {{config.WEBSITE_SHORT}} at {{config.CONTACT_EMAIL}}.</p>
<p>{{config.WEBSITE_SHORT}} has further committed to refer unresolved privacy complaints under the EU-US Privacy Shield Principles
    to BBB EU Privacy Shield, a non-profit alternative dispute resolution provider located in the United States and operated
    by the Council of Better Business Bureaus. If you do not receive timely acknowledgment of your complaint, or if your
    complaint is not satisfactorily addressed, please visit
    <a href="https://www.bbb.org/EU-privacy-shield/for-eu-consumers/"
        hidefocus="true" style="outline: none;">www.bbb.org/EU-privacy-shield/for-eu-consumers/</a> for more information and to file a complaint.</p>
<p>Finally and in
    <a href="https://www.privacyshield.gov/article?id=ANNEX-I-introduction" hidefocus="true" style="outline: none;">certain circumstances</a>, EU individuals may also have the right to invoke binding arbitration before the Privacy
    Shield Panel. Please see
    <a href="https://www.privacyshield.gov/article?id=C-Pre-Arbitration-Requirements" hidefocus="true"
        style="outline: none;">https://www.privacyshield.gov/article?id=C-Pre-Arbitration-Requirements</a> for more information on the binding arbitration
    option.</p>
<h3>
    <b>Our Technology</b>
</h3>
<p>
    <strong>What are cookies?</strong> A cookie is a small text file stored on a user’s computer for record-keeping purposes.
    There are two types of cookies:</p>
<ul>
    <li>Session cookies are used to make it easier for you to navigate on websites. A session ID cookie expires when you
        close your browser.</li>
    <li>Persistent cookies are used to run our technology as they enable us to track and target the interests of our users
        to enhance the experience on our websites. Persistent cookies remain on your hard drive for an extended period
        of time. You can remove persistent cookies by following the directions provided in your internet browser’s ‘help’
        file.</li>
</ul>
<p>
    <strong>What are pixel tags?</strong> A pixel tag (also commonly known as a web beacon) is a type of technology placed on
    a website or within the body of an e-mail for the purpose of tracking activity on websites, or when e-mails are opened
    or accessed, and is often used in combination with cookies.</p>
<h3>
    <b>Other Environments (mobile applications)</b>
</h3>
<p>In environments that do not support cookies, such as mobile applications, we may use other similar technologies for the
    same purpose of cookies. To serve our ads in mobile applications we collect identifiers, such as a Google Advertising
    ID or Apple IDFA, depending on the operating system of your mobile device.</p>
<h3>
    <b>Linking Environments</b>
</h3>
<p>To serve you our personalized advertisements and provide a seamless online experience, we may link your identifiers on
    the different environments you are using. At no point do we collect identifying personal data such as your name or
    address to operate the linking.</p>
<h3>
    <b>Information We Collect</b>
</h3>
<p>{{config.WEBSITE_SHORT}} collects information to provide better services to our valued users. We collect information in the following
    ways:</p>
<ul>
    <li>
        <b>Information you give us.</b> For example, {{config.WEBSITE_SHORT}} collects personal information when you create an account
        with {{config.WEBSITE_SHORT}}; when you place an order; when you enter promotions or sweepstakes, such as your name, email
        address, birth date, gender, and ZIP code; and when you use our online forum.</li>
    <li>
        <b>Information we get from your use of our services.</b> We collect information about the services that you use
        and how you use them, such as information about how you use our sites and mobile applications, visit a website
        that uses our advertising services, view or interact with our ads and content, and information about your computer
        or mobile device. This information may include:</li>
</ul>
<ul>
    <li>
        <b>Device Information</b>
    </li>
    <li>
        <p>We collect device-specific information such as your hardware model, operating system version, unique device identifiers,
            and mobile network information including your phone number. {{config.WEBSITE_SHORT}} may associate your device identifiers
            or phone number with your {{config.WEBSITE_SHORT}} account.</p>
    </li>
</ul>
<ul>
    <li>
        <b>Log Information</b>
    </li>
    <b>
        <li>When you use our services or view content provided by {{config.WEBSITE_SHORT}}, we automatically collect and store certain
            information in our server logs. This includes:</li>
        <li>Details of how you use our services (e.g., your search queries).</li>
        <li>IP address</li>
        <li>Device event information such as crashes, system activity, hardware setting, browser type, browser language,
            the date and time of your request, and referral URL</li>
        <li>Cookies that may uniquely identify your browser on your {{config.WEBSITE_SHORT}} account</li>
    </b>
</ul>
<b>
    <ul>
        <li>
            <b>Location Information</b>
        </li>
        <li>When you use {{config.WEBSITE_SHORT}} services, we may collect and process information about your actual location. We use
            various technologies to determines location, including your IP address, GPS, and other sensors that may,
            for example, provide {{config.WEBSITE_SHORT}} with information on nearby devices, Wi-Fi access points, and cell towers.</li>
        <li>If you have downloaded one or more of our mobile applications, you may have the option to opt-in to location
            sharing for additional application capabilities. We may use this information to provide you with location-based
            services, such as advertising, search results, and other personalized content. Most mobile devices allow
            you to turn off location services. Most likely, these controls are located in the devices’ settings menu;
            however, if you have questions about how to disable your device’s location services, we recommend you contact
            your mobile service carrier or your device manufacturer.</li>
    </ul>
    <ul>
        <li>
            <b>Unique Application Numbers</b>
        </li>
        <li>Certain services include a unique application number. This number and information about your installation may
            be sent to {{config.WEBSITE_SHORT}} when you install or uninstall a certain service or when a service periodically contacts
            our servers, such as for updates.</li>
    </ul>
    <ul>
        <li>
            <b>Local Storage</b>
        </li>
        <li>{{config.WEBSITE_SHORT}} may collect and store information – including personal information – locally on your device using
            mechanisms such as browser web storage and application data caches.</li>
    </ul>
    <ul>
        <li>
            <b>Cookies and Similar Technologies</b>
        </li>
        <li>{{config.WEBSITE_SHORT}} may set and access cookies on your computer. We may also set and access device identifiers which
            may include your IP address, user agent information (e.g., browser version, OS type, and version), and device-provided
            identifiers. Once you interact with our services, site(s), and/or application(s), {{config.WEBSITE_SHORT}} may recognize
            your device to provide you with a personalized experience, independent of your device settings.</li>
        <li>{{config.WEBSITE_SHORT}} lets other trusted business use cookies or similar technologies for advertising and research purposes
            on our services. This information is used to serve ads for {{config.WEBSITE_SHORT}} products or services or for the
            products or services of other companies when you visit this website or other websites. These companies use
            non-personally-identifiable information (e.g., click stream information, browser type, time and date, subject
            of advertisements clicked or scrolled over, hardware/software information, cookie and session ID) and personally
            identifiable information (e.g., static IP address) during your visits to this and other websites in order
            to provide advertisements about goods and services likely to be of greater interest to you. These parties
            typically use a cookie, web beacon, or other similar tracking technologies to collect this information. Other
            companies’ use of their cookies and device identifiers is subject to their own privacy policies, not this
            one. Advertisers or other companies do not have access to {{config.WEBSITE_SHORT}}’s cookies. If you would like more
            information about this practice and to know your choices about not having this information used by these
            companies, visit
            <a href="https://networkadvertising.org/" hidefocus="true" style="outline: none;">http://networkadvertising.org/</a>.</li>
        <li>{{config.WEBSITE_SHORT}} uses web beacons to access {{config.WEBSITE_SHORT}} cookies inside and outside our network of websites and
            in connection with {{config.WEBSITE_SHORT}} products and services.</li>
    </ul>
    <ul>
        <li>
            <b>E-mail Communications</b>
        </li>
        <li>To help us make e-mails more useful and interesting, we often receive a confirmation when you open e-mail from
            {{config.WEBSITE_SHORT}} or its affiliates if your computer supports such capabilities.</li>
    </ul>
    <ul>
        <li>
            <b>Social Media.</b> {{config.WEBSITE_SHORT}} engages with guests on multiple social media platforms (e.g., Facebook, Instagram,
            Twitter, and Pinterest). If you contact us on ore of our social media platforms, we may contact you via direct
            message. In these instances, your interactions with us are governed by this privacy policy as well as the
            privacy policy of the social media platform you use.</li>
        <li>
            <b>Social Media Widgets.</b> Our sites and mobile applications include social media features, such as the Facebook
            “Like” button, Google Plus, Pinterest, and Twitter widgets. These features may collect information about
            your IP address and which page you’re visiting on our site, and they may set a cookie or employ other tracking
            technologies. Social media features and widgets are either hosted by a third party or hosted directly on
            our site. Your interactions with those features are governed by the privacy policies of the companies that
            provide them.</li>
    </ul>
    <h3>
        <b>Cookies, Tracking, and Interest-Based Advertising</b>
    </h3>
    <p>The “help” function of your browser should contain instructions on how to set your computer to accept all cookies,
        to notify you when a cookie is issued, or to not receive cookies at any time. If you set your device to not receive
        cookies at any time, certain personalized services cannot be provided to you, and accordingly, you may not be
        able to take full advantage of all of our features.</p>
    <h3>
        <b>Third-Party Advertisers and Links to Other Websites</b>
    </h3>
    <p>Our site includes third-party interest-based advertising using information you make available to us when you interact
        with our sites, content, or services. Interest-based ads are displayed to you based on information from activities
        such as purchasing on our sites, visiting sites that contain {{config.WEBSITE_SHORT}} content or ads, or interacting with
        {{config.WEBSITE_SHORT}} tools.</p>
    <h3>
        <b>How is Your Information Used?</b>
    </h3>
    <p>Examples of how we use the information we collect include:</p>
    <ul>
        <li>
            <b>Product and Service Fulfillment</b>
        </li>
        <li>Fulfill and manage purchases, orders, payments, and returns/exchanges</li>
        <li>Respond to requests for information about our products and services on our website, mobile website, or mobile
            applications, or to otherwise serve you</li>
        <li>Connect with you regarding customer service via our contact center or social media platforms</li>
        <li>Administer sweepstakes and contests</li>
        <li>Allow you to, via our website or mobile applications, sign up for our e-mail newsletter, search for products
            and check availability, check prices, provide product ratings and reviews, track your orders, update account
            information, etc.</li>
    </ul>
    <ul>
        <li>
            <b>Our Marketing Purposes</b>
        </li>
        <li>Deliver coupons and promotions, newsletters, e-mails, mobile messages, and social media notifications from {{config.WEBSITE_SHORT}}
            and from {{config.WEBSITE_SHORT}} partners, vendors, or affiliates</li>
        <li>Provide interactive features on the website or mobile applications, such as product reviews or weekly deals,
            send marketing communications and other information regarding, products, services, and promotions</li>
        <li>Administer contests, sweepstakes, promotions, surveys, etc.</li>
    </ul>
    <ul>
        <li>
            <b>Internal Operations</b>
        </li>
        <li>Improve the effectiveness of our website, stores, mobile experience, and marketing efforts</li>
        <li>Conduct research and analysis, including surveys</li>
        <li>Perform other business activities as needed</li>
    </ul>
    <ul>
        <li>
            <b>Legal Compliance</b>
        </li>
        <li>For example, assist law enforcement and respond to legal/regulatory inquiries</li>
    </ul>
    <h3>
        <b>Information We Share</b>
    </h3>
    <p>We do not share personal information with companies, organizations, and individuals outside of {{config.WEBSITE_SHORT}} unless
        one of the following circumstances applies:</p>
    <ul>
        <li>
            <b>With Your Consent:</b> We will share personal information with companies, organizations, or individuals outside
            of {{config.WEBSITE_SHORT}} when appropriate.</li>
        <li>
            <b>For External Processing:</b> We provide personal information to our affiliates or other trusted businesses
            or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and
            any other appropriate confidentiality and security measures.</li>
        <li>
            <b>Service Providers:</b> We may share the information we collect with companies that provide support services
            to us (such as e-mail providers, mobile marketing services, analytics providers, web hosting providers, call
            center/chat providers, sweepstakes vendors, payment processors, data enhancement services, or fraud prevention
            providers) or that help us market our products and services. These companies may need information about you
            in order to perform their functions.</li>
        <li>
            <b>For Legal Reasons:</b> We will share personal information with companies, organizations, or individuals outside
            of {{config.WEBSITE_SHORT}} if we have a good-faith belief that access, use, preservation, or disclosure of the information
            is reasonably necessary to:
            <ul>
                <li>Meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
                <li>Enforce applicable Terms of Use, including investigation of potential violations.</li>
                <li>Detect, prevent, or otherwise address fraud, security, or technical issues.</li>
                <li>Protect against harm to the rights, property, or safety of {{config.WEBSITE_SHORT}}, our users, or the public as
                    required or permitted by law.</li>
            </ul>
        </li>
    </ul>
    <p>This does not include selling, renting, sharing, or otherwise disclosing personally identifiable information from
        customers for commercial purposes.</p>
    <p>If {{config.WEBSITE_SHORT}} undergoes a merger, corporate reorganization, acquisition, or asset sale, your personal data may
        be shared. If you do not want us to share your personal data in these manners, please do not provide it to us.</p>
    <p>Please note that {{config.WEBSITE_SHORT}} may be required to release an individual’s personal information in response to lawful
        requests by public authorities in order to meet national security and/or law enforcement requirements.</p>
    <p>In the context of an onward transfer, {{config.WEBSITE_SHORT}} has responsibility for the processing of personal information
        it receives under the Privacy Shield and subsequently transfers to a third party acting as an agent on its behalf.
        {{config.WEBSITE_SHORT}} shall remain liable under the Principles if its agent processes such personal information in a
        manner inconsistent with the Principles, unless the organization proves that it is not responsible for the event
        giving rise to the damage.</p>
    <h3>
        <b>Accessing and Updating Your Personal Information</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} acknowledges the individual’s right to access their personal data. Whenever you use our services, we
        aim to provide you with access to your personal information. If that information is wrong, we strive to give
        you ways to update it quickly or to delete it – unless we have to keep that information for legitimate business
        or legal purposes. When updating your personal information, we may ask you to verify your identity before we
        can act on your request.</p>
    <p>We may reject requests that are unreasonably repetitive, require disproportionate technical effort (for example,
        developing a new system or fundamentally changing an existing practice), risk the privacy of others, or would
        be extremely impractical (for instance, requests concerning information residing on backup systems).</p>
    <p>Where we can provide information access and correction, we will do so for free, except where it would require a disproportionate
        effort. We aim to maintain our services in a manner that protects information from accidental or malicious destruction.
        Because of this, after you delete information from our services, we may not immediately delete residual copies
        from our active servers and may not remove information from our backup systems.</p>
    <p>You have the right to request information about the personal data we hold on you. If your data is incorrect, incomplete,
        or irrelevant you can ask to have the information corrected or removed. To access or update your personal information
        e-mail {{config.CONTACT_EMAIL}} with your current contact information and the personal information you would like
        to access. We will provide you the personal information requested if reasonably available, or will describe the
        types of personal information we typically collect.</p>
    <h3>
        <b>E-mail Opt-out</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} and third party vendors, partners, and affiliates communicate with users who subscribe to our services
        on a regular basis via e-mail. For example, we may use your e-mail address to confirm your request, to send you
        notice of payments, to send you promotions, to send you information about changes to our products and services,
        and to send notices and other disclosures as required by law. Generally, users cannot opt-out of these communications,
        but they will be primarily informational in nature rather than promotional.</p>
    <p>However, we provide you the opportunity to exercise an opt-out choice if you do not want to receive other types of
        communication from us, such as emails or updates from us regarding new services and products offered on the Sites.
        The opt-out choice may be exercised by ticking or unticking the appropriate box if such checkbox is available
        at the points where personal data is collected or by contacting us. We will process your unsubscribe request
        as soon as possible, but please be aware that in some circumstances you may receive a few more messages until
        the unsubscribe is processed. You also may opt-out of receiving such emails by clicking on the “unsubscribe”
        link within the text of the email.</p>
    <h3>
        <b>Mobile</b>
    </h3>
    <ul>
        <li>Push Notifications: You may at any time opt-out from further allowing {{config.WEBSITE_SHORT}} to send you push notifications
            by adjusting the notification permissions in the Settings on your mobile device.</li>
        <li>Geo-location: You may at any time opt-out from further allowing {{config.WEBSITE_SHORT}} to access location data by adjusting
            the permission in your mobile device.</li>
    </ul>
    <h3>
        <b>How is Your Personal Information Protected?</b>
    </h3>
    <p>
        <b>Security Methods:</b> We maintain administrative, technical, and physical safeguards to protect your personal
        information. When we collect or transmit sensitive information, we use industry standard methods to protect that
        information. However, no e-commerce solution, website, mobile application, database, or system is completely
        secure or “hacker proof.” You are also responsible for taking reasonable steps to protect your personal information
        against unauthorized disclosure or misuse.</p>
    <p>
        <b>E-mail Security:</b> “Phishing” is a scam designed to steal your personal information. If you receive an e-mail
        that looks like it is from us asking for your personal information, do not respond. We will never request your
        password, username, credit card information, or other personal information through e-mail.</p>
    <p>
        <b>Children’s Personal Information:</b> We recognize the particular importance of protecting privacy where children
        are involved. We do not knowingly collect personal information online form children under the age of 13. If a
        child under the age of 13 has provided us with personal information online, we ask that a parent or guardian
        e-mail {{config.CONTACT_EMAIL}}.</p>
    <h3>
        <b>California Privacy Rights</b>
    </h3>
    <p>California Civil Code Section 1798.83 permits our visitors who are California residents to request certain information
        regarding our disclosure of personal data to third parties for their direct marketing purposes. To make such
        a request, please contact us at {{config.CONTACT_EMAIL}}. For all requests, you must include your full name, street
        address, city, state, and zip code. We will not accept requests via telephone, postal mail, or facsimile, and
        we are not responsible for notices that are not labeled or sent property, or that do not have complete information.</p>
</b>


    </ion-content>
  `
})
export class PrivacyModal {

    constructor(
        public viewCtrl: ViewController,
        public config: ConfigProvider
    ) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
