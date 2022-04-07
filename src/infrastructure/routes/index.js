import {
  DashboardPage,
  CategorysPage,
  ArticlesPage,
  IncomePage,
  ProvidersPage,
  SalesPage,
  ClientsPage,
  CustomersPage,
  ReportsPage,
} from "../pages";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "apps-outline",
    component: DashboardPage,
  },
  {
    path: "/categorys",
    name: "Categorys",
    icon: "bookmarks-outline",
    component: CategorysPage,
  },
  {
    path: "/articles",
    name: "Articles",
    icon: "cart-outline",
    component: ArticlesPage,
  },
  {
    path: "/income",
    name: "Income",
    icon: "cash-outline",
    component: IncomePage,
  },
  {
    path: "/providers",
    name: "Providers",
    icon: "storefront-outline",
    component: ProvidersPage,
  },
  {
    path: "/sales",
    name: "Sales",
    icon: "card-outline",
    component: SalesPage,
  },
  {
    path: "/clients",
    name: "Clients",
    icon: "person-outline",
    component: ClientsPage,
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "people-outline",
    component: CustomersPage,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "stats-chart-outline",
    component: ReportsPage,
  },
  {
    path: "/",
    name: "Sign Out",
    icon: "log-out-outline",
    component: DashboardPage,
  },
];

export default routes;
