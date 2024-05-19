import { MainSidebarGroup } from "./Sidebar";

export const SIDEBAR_DATA: MainSidebarGroup[] = [{
  title: 'Main Menu',
  items: [{
    label: 'Dashboard',
    logo: '/icons/light/icon-sidebar-dashboard.png',
    logoActive: '/icons/light/icon-sidebar-dashboard-active.png',
    items: [{
      label: 'Dashboard',
      href: '/main',
    }, {
      label: 'Peta Indonesia',
      href: '/main/peta-indonesia',
      code: 'peta-indonesia'
    }]
  }, {
    label: 'Organization & Employee',
    logo: '/icons/light/icon-sidebar-organization.png',
    logoActive: '/icons/light/icon-sidebar-organization-active.png',
    items: [{
      label: 'Organization Structure',
      href: '/main/organization/structure',
      code: 'organization/structure'
    }, {
      label: 'Employee',
      href: '/main/organization/employee',
      code: 'organization/employee'
    }]
  }, {
    label: 'Training & Event',
    logo: '/icons/light/icon-sidebar-library.png',
    logoActive: '/icons/light/icon-sidebar-library-active.png',
    items: [{
      label: 'Training Wajib',
      href: '/main/training-event/training-wajib',
      code: 'training-event/training-wajib'
    }, {
      label: 'Group Learning',
      href: '/main/training-event/group-learning',
      code: 'training-event/group-learning'
    }, {
      label: 'Event',
      href: '/main/training-event/event',
      code: 'training-event/event'
    }]
  }, {
    label: 'Library',
    logo: '/icons/light/icon-sidebar-library.png',
    logoActive: '/icons/light/icon-sidebar-library-active.png',
    items: [{
      label: 'Knowledge & Training',
      href: '/main/library/knowledge-training',
      code: 'library/knowledge-training'
    }]
  }, {
    label: 'OKRs',
    logo: '/icons/light/icon-sidebar-okr.png',
    logoActive: '/icons/light/icon-sidebar-okr-active.png',
    items: [{
      label: 'OKRs Perusahaan',
      href: '/main/okr/perusahaan',
      code: 'okr/perusahaan'
    }, {
      label: 'OKRs Cabang',
      href: '/main/okr/cabang',
      code: 'okr/cabang'
    }, {
      label: 'OKRs Divisi',
      href: '/main/okr/divisi',
      code: 'okr/divisi'
    }]
  }, {
    label: 'ROTI',
    logo: '/icons/light/icon-sidebar-roti.png',
    logoActive: '/icons/light/icon-sidebar-roti-active.png',
    items: [{
      label: 'Detail ROTI',
      href: '/main/roti',
      code: 'roti'
    }]
  }, {
    label: 'Training & Budget',
    logo: '/icons/light/icon-sidebar-training-budget.png',
    logoActive: '/icons/light/icon-sidebar-training-budget-active.png',
    items: [{
      label: 'Plan Analysis',
      href: '/main/training-budget/plan-analysis',
      code: 'training-budget/plan-analysis'
    }, {
      label: 'Plan & Budget Diajukan',
      href: '/main/training-budget/plan-budget-diajukan',
      code: 'training-budget/plan-budget-diajukan'
    }, {
      label: 'Plan & Budget Final',
      href: '/main/training-budget/plan-budget-final',
      code: 'training-budget/plan-budget-final'
    }, {
      label: 'Realisasi',
      href: '/main/training-budget/realisasi',
      code: 'training-budget/realisasi'
    }]
  }, {
    label: 'Admin',
    href: '/main/admin',
    logo: '/icons/light/icon-sidebar-admin.png',
    logoActive: '/icons/light/icon-sidebar-admin-active.png',
    items: [{
      label: 'Semua Admin',
      href: '/main/admin',
      code: 'admin'
    }, {
      label: 'Role',
      href: '/main/role',
      code: 'role'
    }]
  }]
}];
