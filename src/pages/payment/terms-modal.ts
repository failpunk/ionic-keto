import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config.provider';

@Component({
    selector: 'terms-modal',
    template: `
    <ion-header>
    
        <ion-navbar>
            <ion-buttons start>
              <button ion-button (click)="dismiss()">Close</button>
            </ion-buttons>
        </ion-navbar>
        
    </ion-header>

    <ion-content padding>
    
    <h2 id="terms">
        <b>{{config.APP_NAME}} TERMS OF SERVICE</b>
    </h2>

    <p>These Terms of Use (“Terms”) govern all use of {{config.APP_NAME}} Club (“{{config.WEBSITE_SHORT}}”). {{config.WEBSITE_SHORT}} includes {{config.WEBSITE_SHORT}}
        and other sites owned or operated (“Site”). By using and accessing the Site, you agree to these Terms, the Privacy
        Policy, other policies, and all applicable laws and regulations.</p>
    <p>If any {{config.WEBSITE_SHORT}} services have additional terms and conditions, privacy statements, or other policies (“Separate
        Terms”), then those Separate Terms shall apply in connection with your use of that {{config.WEBSITE_SHORT}} service. To the
        extent there is a direct conflict between the Separate Terms and these Terms, the Separate Terms shall govern. If
        you do not want to be bound by these Terms, do not use the Site.</p>
    <p>{{config.WEBSITE_SHORT}} is primarily an online retailer of third-party brands and all product information is provided by the brand
        owner and is for information purposes only. Actual product packaging may contain different information than is displayed
        on our site. DO NOT RELY SOLELY ON THIS INFORMATION. ALWAYS READ LABELS, WARNINGS AND FOLLOW DIRECTIONS ON THE PRODUCT
        LABEL BEFORE USE. YOU HEREBY WAIVE ANY LIABILITY AGAINST {{config.WEBSITE_SHORT}} FOR INACCURACIES OR MISSTATEMENTS RELATED
        TO PRODUCTS MANUFACTURED BY THIRD PARTIES.</p>
    <p>{{config.WEBSITE_SHORT}} reserves the right to suspend or terminate your account and your ability to use the Site or portion thereof
        for failure to comply with these Terms or any Separate Terms related to a service, for infringing copyright, or for
        any other reason.</p>
    <h3>
        <b>1. CHANGES IN TERMS</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} has the sole right at any time and without prior notice to revise these Terms. {{config.WEBSITE_SHORT}}will post changes
        on the Site and it is your responsibility to review these Terms and any modifications.</p>
    <h3>
        <b>2. TERMINATION</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} has the right at any time and without prior notice to terminate some or all of {{config.WEBSITE_SHORT}} services,
        any feature or portion thereof, or any products or services offered, and to terminate your right to access or use
        {{config.WEBSITE_SHORT}} services or any feature or portion thereof.</p>
    <h3>
        <b>3. COMPLIANCE WITH LAWS</b>
    </h3>
    <p>You agree to comply with all applicable laws and regulations regarding your use of the Site. You must be at least 13
        years old to use {{config.WEBSITE_SHORT}}. See the Children’s Personal Information section of the Privacy Policy.</p>
    <h3>
        <b>4. CONTENT</b>
    </h3>
    <p>The text, images, photographs, graphics, videos, logos, illustrations, descriptions, data, and other material on the
        Site, as well as the selection, assembly, and arrangement thereof, are referred to collectively as the “Content”.</p>
    <p>The Content may contain errors, omissions, or may be out of date. {{config.WEBSITE_SHORT}} may change, delete, or update Content
        at any time. The Content is provided for informational purposes only and is not binding on {{config.WEBSITE_SHORT}}.</p>
    <p>All content, logos, graphics, pages, scripts, and service names included in or made available through any Site are subject
        to trade dress, trademarks, service marks, and/or copyright law and other laws that protect intellectual property
        in the U.S. and other countries. {{config.WEBSITE_SHORT}}’s intellectual property may not be used without {{config.WEBSITE_SHORT}}’s written
        permission. All other trademarks and service marks not owned by {{config.WEBSITE_SHORT}} that appear in any Site are the property
        of their respective owners, who may or may not be affiliated with, connected to, or sponsored by {{config.WEBSITE_SHORT}}.</p>
    <p>You may view and use the Content for your personal information and for ordering and for no other purpose. {{config.WEBSITE_SHORT}}
        does not grant to you or any person any right to use, reproduce, copy, modify, transmit, display, publish, sell,
        license, create derivative works, publicly perform, or distribute by any means, method, or process whatsoever, now
        known or hereafter developed, any of the Content on or transmitted through the Site.</p>
    <h3>
        <b>5. NOTICE AND PROCEDURE FOR ADDRESSING INTELLECTUAL PROPERTY CONCERNS</b>
    </h3>
    <p>If you have any concerns related to intellectual property on the site, please provide the {{config.WEBSITE_SHORT}} copyright agent
        the following:</p>
    <ul>
        <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other
            intellectual property interest;</li>
        <li>A description of the copyrighted work or other intellectual property at issue;</li>
        <li>The location of the material giving rise to the concern on the Site;</li>
        <li>Your address, telephone number, facsimile number, and email address;</li>
        <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright or
            other intellectual property owner, its agent, or the law;</li>
        <li>A statement by you, under penalty of perjury, that the above information in your Notice is accurate and that you
            are the copyright or other intellectual property owner or are authorized to act on behalf of the copyright or
            other intellectual property owner.</li>
    </ul>
    <p>Notification should be sent to: {{config.CONTACT_EMAIL}}</p>
    <h3>
        <b>6. PRODUCT REVIEWS</b>
    </h3>
    <p>Product reviews appearing on the Site are prepared by third-parties (including, but not limited to, review pages, message
        boards, forums, text files, chats, etc.). {{config.WEBSITE_SHORT}} has not determined whether a specific reviewer’s experience
        is what an average or typical customer may expect to achieve.</p>
    <h3>
        <b>7. ACCOUNTS</b>
    </h3>
    <p>Some services on the Site permit or require you to create an account to participate or to secure additional benefits.
        You agree to provide, maintain and update true, accurate, current and complete information about yourself as prompted
        by our registration processes. You shall not impersonate any person or entity or misrepresent your identity or affiliation
        with any person or entity, including using another person’s username, password or other account information, or another
        person’s name, likeness, voice, image or photograph. You also agree to promptly notify {{config.WEBSITE_SHORT}} at </p>
    <p>{{config.CONTACT_EMAIL}}</p>
    <p> of any unauthorized use of your username, password, other account information, or any other breach of security involving
        or relating to the Site.</p>
    <h3>
        <b>8. USER CONTENT</b>
    </h3>
    <p>The Site allows you to post content, including, but not limited to, photos, reviews, ideas, suggestions, links, and other
        materials. Anything that you post or otherwise make available on or in connection with the Site is referred to as
        “User Content.” This content also includes content collected in our {{config.APP_NAME}} Athlete intake forms. User Content
        is non-confidential, non-proprietary, and may be used by {{config.WEBSITE_SHORT}}, {{config.WEBSITE_SHORT}} vendors, or their affiliates
        for any purpose without further permission, consent, payment, or other consideration, unless prohibited by law. You
        agree that as a condition of permitting you to submit User Content, you grant {{config.WEBSITE_SHORT}}, {{config.WEBSITE_SHORT}}’s affiliates,
        and any sub-licensees, subject to the Privacy Policy, a non-exclusive, irrevocable, royalty-free, worldwide, fully
        sub-licensable, perpetual right and license to use, copy, publicly perform, digitally perform, publicly display,
        and distribute User Content, including the use of your name, alias, and any other information (provided by you),
        and to prepare derivative works based on, or incorporate into other works, User Content, with or without attribution.
        You represent and warrant that any User Content is in compliance with all applicable laws and regulations, and it
        is not composed of and does not contain viruses, solicitations, or any form of spam. Your submission of User Content
        constitutes an agreement that you will defend, indemnify, and hold {{config.WEBSITE_SHORT}} harmless for all claims resulting
        from User Content you supply.</p>
    <p>{{config.WEBSITE_SHORT}} is not responsible for, and does not endorse the opinions, advice or recommendations in User Content and
        specifically disclaim all liability in connection therewith.</p>
    <p>{{config.WEBSITE_SHORT}} reserves the right to modify, review, delete and refuse to post User Content for any reason.</p>
    <h3>
        <b>9. PUBLIC FORUMS AND COMMUNICATION</b>
    </h3>
    <p>“Forum” means an area, site or feature offered as part of a Site that allows users to distribute User Content for viewing
        by Site users, including a chat area, message board, messaging, social community environment, profile page, blog,
        and e-mail function.</p>
    <p>You acknowledge that Forums and features offered therein are for public and not private communications, and you have
        no expectation of privacy with regard to any User Content. You further agree that your communications will comply
        with all rules set forth in section 10 below. {{config.WEBSITE_SHORT}} cannot guarantee the security of any User Content and
        you make such disclosures at your own risk. {{config.WEBSITE_SHORT}} has no duty to monitor any Forum.</p>
    <h3>
        <b>10. RULES OF CONDUCT</b>
    </h3>
    <p>By using the Site, you agree that you will not submit any User Content that: (a) is defamatory, abusive, harassing, threatening,
        or an invasion of a right of privacy; (b) is bigoted, hateful, or racially or otherwise offensive; (c) is violent,
        vulgar, obscene, pornographic or otherwise sexually explicit; or (d) otherwise harms or can reasonably be expected
        to harm any person or entity; (e) is illegal or encourages or advocates illegal activity or the discussion of illegal
        activities with the intent to commit them, including User Content that is or represents an attempt to engage in child
        pornography, stalking, sexual assault, suicide, fraud, trafficking in obscene or stolen material, drug dealing and/or
        drug abuse, harassment, theft, or conspiracy to commit any criminal activity; (f) infringes or violates any right
        of a third party; (g) is commercial, business-related or advertises or offers to sell any products, services or otherwise
        (whether or not for profit), or solicits others (including solicitations for contributions or donations) unless specifically
        authorized by {{config.WEBSITE_SHORT}}; (h) contains a virus or other harmful component, or otherwise tampers with, impairs
        or damages the Site or any connected network, or otherwise interferes with any person or entity’s use or enjoyment
        of the Site; (i) violates any specific restrictions applicable to a Forum, including its age restrictions and procedures;
        or (j) is antisocial, disruptive, or destructive, including flaming, spamming, flooding, trolling, and griefing as
        those terms are commonly understood and used on the internet.</p>
    <h3>
        <b>11. DISCLAIMER AND LIMITATION OF LIABILITY AS TO THE {{config.WEBSITE_SHORT}}.COM SITE AND CONTENT</b>
    </h3>
    <p>UNLESS PROHIBITED BY APPLICABLE LAW, {{config.WEBSITE_SHORT}} MAKES NO WARRANTIES OR REPRESENTATIONS WHATSOEVER WITH RESPECT TO
        {{config.WEBSITE_SHORT}}, ANY LINKED SITE OR ITS CONTENT, INCLUDING THE AVAILABILITY OF ANY SITE OR THE CONTENT, INFORMATION,
        AND MATERIALS ON IT OR THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THAT CONTENT, INFORMATION, AND MATERIALS. {{config.WEBSITE_SHORT}}
        ALSO DOES NOT WARRANT OR REPRESENT THAT YOUR ACCESS TO OR USE OF {{config.WEBSITE_SHORT}} OR ANY LINKED SITE WILL BE UNINTERRUPTED
        OR FREE OF ERRORS OR OMISSIONS, THAT DEFECTS WILL BE CORRECTED, OR THAT {{config.WEBSITE_SHORT}} OR ANY LINKED SITE IS FREE
        OF COMPUTER VIRUSES OR OTHER HARMFUL COMPONENTS. WITHOUT LIMITING THE FOREGOING, ALL CONTENT PROVIDED ON OR THROUGH
        {{config.WEBSITE_SHORT}} IS PROVIDED TO USERS “AS IS,” WITH NO WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT
        LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, SECURITY,
        OR ACCURACY. THE “AS IS” CONDITION OF CONTENT IS EXPRESSLY MADE A CONDITION OF ANY TRANSACTION ARISING THROUGH OR
        AS A RESULT OF THE {{config.WEBSITE_SHORT}} SERVICES.</p>
    <p>UNLESS PROHIBITED BY APPLICABLE LAW, {{config.WEBSITE_SHORT}} SHALL NOT, UNDER ANY CIRCUMSTANCES, BE LIABLE TO YOU FOR ANY INDIRECT,
        INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH USE OF THE APPLICATION,
        WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE),
        OR ANY OTHER PECUNIARY LOSS, WHETHER OR NOT {{config.WEBSITE_SHORT}} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. UNDER
        NO CIRCUMSTANCES SHALL {{config.WEBSITE_SHORT}} BE LIABLE TO YOU FOR ANY AMOUNT.</p>
    <h3>
        <b>12. ELECTRONIC COMMUNICATION AND MARKETING</b>
    </h3>
    <p>By using the Site you consent to receive communications from {{config.WEBSITE_SHORT}} or any of our third party vendors, partners,
        or affiliates electronically. {{config.WEBSITE_SHORT}} or any of our third party vendors, partners, or affiliates will communicate
        with you by email or by posting notices on the Site. You agree that all notices, disclosures, agreements and other
        communications that {{config.WEBSITE_SHORT}} or any of our third party vendors, partners, or affiliates provides electronically
        satisfies any legal requirement that such communications be in writing.</p>
    <h3>
        <b>13. LINKED THIRD PARTY SITES</b>
    </h3>
    <p>Links to other websites operated by third parties, including {{config.WEBSITE_SHORT}} vendors, do not constitute sponsorship, endorsement,
        or approval by {{config.WEBSITE_SHORT}} of the content, policies, or practices of such linked sites. {{config.WEBSITE_SHORT}} does not
        operate, control, or maintain linked sites and is not responsible for their availability, content, security, policies,
        or practices. Links to other sites are provided for your convenience and you access them at your own risk.</p>
    <h3>
        <b>14. PRICES; ORDERS</b>
    </h3>
    <p>All purchases and orders are subject to the Conditions of Sale.</p>
    <p>Suggested Retail Price (“SRP”) is provided by the manufacturer and is the manufacturer’s representation of value. Sales
        may or may not be made at this price. This price does not necessarily represent the prevailing retail price in every
        community, and may not represent the price at which {{config.WEBSITE_SHORT}} sells the product.</p>
    <p>{{config.WEBSITE_SHORT}} may add shipping and handling fees and applicable sales/use or value added tax. {{config.WEBSITE_SHORT}} reserves
        the right without prior notice to discontinue or change specifications and prices on products and services offered
        through {{config.WEBSITE_SHORT}}.</p>
    <p>{{config.WEBSITE_SHORT}} reserves the right at any time after receipt of your order to accept or decline your order, or any portion
        thereof, even after your receipt of an order confirmation from {{config.WEBSITE_SHORT}}, for any reason. {{config.WEBSITE_SHORT}} reserves
        the right to limit the order quantity on any item and to refuse service to any customer without prior notification.</p>
    <p>In the event that a product or service is listed at an incorrect price due to supplier pricing information or typographical
        error, {{config.WEBSITE_SHORT}} shall have the right to refuse or cancel orders placed for the product or service listed at
        the incorrect price, regardless of whether the order has been confirmed and your credit card charged. If your credit
        card has already been charged for the purchase and your order is canceled, {{config.WEBSITE_SHORT}} shall promptly issue a credit
        to your credit card account in the amount of the incorrect price.</p>
    <p>The risk of loss and title for all products purchased by you and shipped by {{config.WEBSITE_SHORT}} pass to you upon {{config.WEBSITE_SHORT}}’s
        delivery to the carrier for shipment. The risk of loss and title for all products purchased by you and shipped directly
        by one of {{config.WEBSITE_SHORT}}’s vendors pass from such vendor to you upon such vendor’s delivery to the carrier for shipment.</p>
    <h3>
        <b>15. TRANSPARENCY IN SUPPLY CHAIN DISCLOSURE</b>
    </h3>
    <p>The state of California requires the following disclosure statement as of January 1, 2012, pursuant to the “Transparency
        in Supply Chain Act of 2010”.</p>
    <p>
        <a href="http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf" hidefocus="true"
            style="outline: none;"></a>
    </p>
    <a href="http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf" hidefocus="true"
        style="outline: none;">
        <p>http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf</p>
    </a>
    <p>
        <a href="http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf" hidefocus="true"
            style="outline: none;"></a>
    </p>
    <p>Most nutritional supplements sold by {{config.WEBSITE_SHORT}} are manufactured in the U.S., in accordance with applicable U.S. labor
        laws. Some ingredients are sourced from foreign countries but U.S. manufacturers are required (per Good Manufacturing
        Practices outlined at 21 C.F.R. 111.260) to test ingredients for purity prior to use in nutritional supplements.</p>
    <p>{{config.WEBSITE_SHORT}} is committed to conducting business in compliance with applicable law. {{config.WEBSITE_SHORT}} exhibits and promotes
        the highest standards of honest and ethical conduct in our dealings. {{config.WEBSITE_SHORT}} employees are expected to conduct
        themselves with honesty and integrity, and we recognize the important role manufacturers, ingredient suppliers and
        business partners play in helping us fulfill our commitment to ethical and responsible retailing.</p>
    <p>{{config.WEBSITE_SHORT}} is a retailer not a manufacturer, but {{config.WEBSITE_SHORT}} is not aware of any unethical or illegal labor practices
        in connection with any ingredient sourced outside the U.S. We do not audit and assess each product manufacturer’s
        sourcing practice. {{config.WEBSITE_SHORT}} is aware of the importance of ethical sourcing, and if {{config.WEBSITE_SHORT}} identifies
        a product manufacturer who does not meet {{config.WEBSITE_SHORT}}’s expectations (including avoiding ingredients manufactured
        with trafficked labor), {{config.WEBSITE_SHORT}} will work with them to take corrective action or discontinue selling products
        manufactured by them.</p>
    <h3>
        <b>16. MOBILE SERVICES</b>
    </h3>
    <p>The Site may include certain services that are available to you via your mobile phone or other mobile device if you have
        subscribed to them, including the ability to use your mobile device to place orders, receive and reply to messages
        from {{config.WEBSITE_SHORT}}, and access certain other features. Mobile devices and/or mobile apps may be subject to additional
        terms and conditions.</p>
    <h3>
        <b>17. PERSONALIZED PLANS</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} personalized plans are provided by independent, third-party trainers that are not {{config.WEBSITE_SHORT}} employees.
        By purchasing one of our plans you agree to to our liability clause laid out in section 18, and that {{config.WEBSITE_SHORT}}
        SHALL NOT BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
        DAMAGES INCLUDING LOST PROFITS, PERSONAL INJURY (INCLUDING DEATH) AND PROPERTY DAMAGE OF ANY NATURE WHATSOEVER. IN
        NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES AND LOSSES FOR ANY CAUSE OF ACTION EXCEED THE AMOUNT PAID
        BY YOU, OR $100 (WHICHEVER IS LESS).</p>
    <h3>
        <b>18. DISCLAIMER AND LIMITATION OF LIABILITY</b>
    </h3>
    <p>{{config.WEBSITE_SHORT}} provides the Site (including all Content) “as is” without warranty of any kind, whether express or implied.
        You are solely responsible for damage that results from the use of the Site including, but not limited to, damage
        to your computer system or loss of data.</p>
    <p>{{config.WEBSITE_SHORT}} SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, SECURITY, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.</p>
    <p>{{config.WEBSITE_SHORT}} SHALL NOT BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
        DAMAGES INCLUDING LOST PROFITS, PERSONAL INJURY (INCLUDING DEATH) AND PROPERTY DAMAGE OF ANY NATURE WHATSOEVER. IN
        NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES AND LOSSES FOR ANY CAUSE OF ACTION EXCEED THE AMOUNT PAID
        BY YOU, OR $100 (WHICHEVER IS LESS).</p>
    <h3>
        <b>19. HOLD HARMLESS AND INDEMNITY</b>
    </h3>
    <p>To the maximum extent permitted by applicable law, you agree to hold harmless and indemnify {{config.WEBSITE_SHORT}}, its parent
        company, and their respective subsidiaries, affiliates, officers, agents, licensors, co-branders or other partners,
        and employees from and against any third-party claim arising from or in any way related to your use of the Site,
        including any liability or expense arising from all claims, losses, damages (actual and/or consequential), suits,
        judgments, litigation costs and attorneys’ fees, of every kind and nature.</p>
    <h3>
        <b>20. DISPUTE RESOLUTION</b>
    </h3>
    <p>By using the Site, you agree that all disputes, claims, or causes of action arising from or related to your use of the
        Site will be resolved through binding arbitration in Los Angeles, California in accordance with the rules of the
        American Arbitration Association. ARBITRATION OF A DISPUTE, CLAIM OR CAUSE OF ACTION SHALL BE IN AN INDIVIDUAL CAPACITY
        AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
    <p>These Terms of Use shall be construed in accordance with the laws of the state of California, without giving effect to
        any choice or conflict of law provision. You agree to jurisdiction in California and you will initiate any claim
        in connection with use of the Site or these Terms of Use in Los Angeles, California.</p>
    <p>Nothing in this Section shall prevent {{config.WEBSITE_SHORT}} from seeking injunctive or other equitable relief from the courts
        for matters related to data security, intellectual property, or unauthorized access to the Site.</p>
    <h3>
        <b>21. GENERAL TERMS</b>
    </h3>
    <ol>
        <li>Entire Agreement/Severability. These Terms of Use, together with the App Terms, Privacy Policy, and Conditions of
            Sale and any amendments and any additional agreements you may enter into with {{config.WEBSITE_SHORT}}, shall constitute
            the entire agreement between you and {{config.WEBSITE_SHORT}}. If any provision of these Terms of Use is deemed invalid,
            that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of
            these Terms of Use will remain in full force and effect.</li>
        <li>No Waiver. No waiver of any term of these Terms of Use shall be deemed a further or continuing waiver of such term
            or any other term, and {{config.WEBSITE_SHORT}}’s failure to assert any right or provision under these Terms of Use shall
            not constitute a waiver of such right or provision.</li>
        <li>Defined Words. Any capitalized words used herein and not otherwise defined are defined in {{config.WEBSITE_SHORT}}’s Conditions
            of Sale, App Terms, or Privacy Policy.</li>
    </ol>
    <p>
        <strong>Last Updated: August 21, 2017</strong>
    </p>
    


    </ion-content>
  `
})
export class TermsModal {
    constructor(public viewCtrl: ViewController, public config: ConfigProvider) {}

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
