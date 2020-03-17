<!--
 - Created by Kirsti on 15/03/2020.

 The format of the URL is the following: https://<yourDomain>.lightning.force.com/<yourNamespace>/<yourAppName>.app.

 <yourAppName> represents the name of your app bundle, in this case, harnessApp.
 In your Trailhead org you shouldn’t have a namespace configured, so you should see a “c” in that part of the URL.
 “c” represents the default namespace.

 an app is just a special kind of component!
 For the purposes of this module, you can think of an app as being different from a component in only two meaningful ways:
    An app uses <aura:application> tags instead of <aura:component> tags.
    Only an app has a Preview button in the Developer Console.

 -->

<aura:application description="harnessApp">
    <c:helloWorld/>
</aura:application>