import Reaction from "/imports/plugins/core/core/server/Reaction";
import mutations from "./server/mutations";
import startup from "./server/startup";

Reaction.registerPackage({
  label: "Email",
  name: "reaction-email",
  icon: "fa fa-envelope-o",
  autoEnable: true,
  mutations,
  functionsByType: {
    startup: [startup]
  },
  settings: {
    name: "Email"
  },
  registry: [{
    label: "Email Settings",
    description: "Email settings",
    icon: "fa fa-envelope-o",
    name: "email/settings",
    provides: ["settings"],
    workflow: "coreEmailWorkflow",
    template: "emailSettings",
    meta: {
      actionView: {
        dashboardSize: "md"
      }
    }
  }],
  layout: [{
    layout: "coreLayout",
    workflow: "coreEmailWorkflow",
    theme: "default",
    enabled: true,
    structure: {
      template: "email",
      layoutHeader: "NavBar",
      layoutFooter: "",
      notFound: "notFound",
      dashboardHeader: "dashboardHeader",
      dashboardControls: "dashboardControls",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
