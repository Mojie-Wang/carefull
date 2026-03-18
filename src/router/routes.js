import AboutUsPage from '@/pages/AboutUsPage.vue'
import ApplicationCasesPage from '@/pages/ApplicationCasesPage.vue'
import ContactUsPage from '@/pages/ContactUsPage.vue'
import EventPage from '@/pages/EventPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductCenterPage from '@/pages/ProductCenterPage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      label: 'Home',
    },
  },
  {
    path: '/product-center',
    name: 'product-center',
    component: ProductCenterPage,
    meta: {
      label: 'Product Center',
    },
  },
  {
    path: '/application-cases',
    name: 'application-cases',
    component: ApplicationCasesPage,
    meta: {
      label: 'Application Cases',
    },
  },
  {
    path: '/event',
    name: 'event',
    component: EventPage,
    meta: {
      label: 'Event',
    },
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsPage,
    meta: {
      label: 'About Us',
    },
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsPage,
    meta: {
      label: 'Contact Us',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const navigationItems = routes
  .filter((route) => route.meta?.label)
  .map((route) => ({
    name: route.name,
    path: route.path,
    label: route.meta.label,
  }))
