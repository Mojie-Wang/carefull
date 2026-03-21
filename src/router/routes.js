import AboutUsPage from "@/pages/AboutUsPage.vue";
import ApplicationCasesPage from "@/pages/ApplicationCasesPage.vue";
import ContactUsPage from "@/pages/ContactUsPage.vue";
import EventPage from "@/pages/EventPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProductCenterPage from "@/pages/ProductCenterPage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      label: "Home",
      footer: {
        type: "index",
        title: "SUBSCRIPTION INFORMATION",
      },
    },
  },
  {
    path: "/product-center",
    name: "product-center",
    component: ProductCenterPage,
    meta: {
      label: "Product Center",
      footer: {
        type: "page",
        title: "LIGHTER THINNER SOFTER",
      },
    },
  },
  {
    path: "/application-cases",
    name: "application-cases",
    component: ApplicationCasesPage,
    meta: {
      label: "Application Cases",
      footer: {
        type: "page",
        title: "LIGHTER THINNER SOFTER",
      },
    },
  },
  {
    path: "/event",
    name: "event",
    component: EventPage,
    meta: {
      label: "Event",
      footer: {
        type: "page",
        title: "LIGHTER THINNER SOFTER",
      },
    },
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUsPage,
    meta: {
      label: "About Us",
      footer: {
        type: "page",
        title: "LIGHTER THINNER SOFTER",
      },
    },
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUsPage,
    meta: {
      label: "Contact Us",
      footer: {
        type: "page",
        title: "LIGHTER THINNER SOFTER",
      },
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export const navigationItems = routes
  .filter((route) => route.meta?.label)
  .map((route) => ({
    name: route.name,
    path: route.path,
    label: route.meta.label,
  }));
