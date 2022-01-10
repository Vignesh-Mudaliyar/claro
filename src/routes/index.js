import React from 'react';
const WelocmePage = React.lazy(() => import('../pages/Claro/ClaroWelcomePage'))
const RegistrationPage = React.lazy(() => import('../pages/Claro/RegistrationClaro'))
const PlanSelection = React.lazy(() => import('../pages/Claro/ClaroPlanSelection'));
const NumberSelection = React.lazy(() => import('../pages/Claro/ClaroNumberSelection'));
const FailedActivationPage = React.lazy(() => import('../pages/Claro/FailedActivationPage'));
const SuccessfulActivationPage = React.lazy(() => import('../pages/Claro/SuccessfulActivationPage'));

const routes = [
  { path: '/', name: 'Claro',exact: true, component: WelocmePage  },
  { path: '/register', name: 'Register Claro',exact: true, component: RegistrationPage  },
  { path: '/plan-selection', name: 'Plan Selection',exact: true, component: PlanSelection  },
  { path: '/number-selection', name: 'Number Selection',exact: true, component: NumberSelection  },
  { path: '/fail', name: 'Successful Activation',exact: true, component: FailedActivationPage  },
  { path: '/success', name: 'Failed Activation',exact: true, component: SuccessfulActivationPage  },
  
]
export default routes;