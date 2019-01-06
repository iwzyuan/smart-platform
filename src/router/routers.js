import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/permissions',
    name: 'permissions',
    component: Main,
    meta: {
      icon: 'ios-settings',
      title: '权限管理'
    },
    children: [
      {
        path: 'permissions_department',
        name: 'permissions_department',
        meta: {
          icon: 'ios-paper',
          title: '部门设置'
        },
        component: () => import('@/view/permissions/permissions_department.vue')
      },
      {
        path: 'permissions_operator',
        name: 'permissions_operator',
        meta: {
          icon: 'ios-people',
          title: '操作员设置'
        },
        component: () => import('@/view/permissions/permissions_operator.vue')
      },
      {
        path: 'permissions_institutions',
        name: 'permissions_institutions',
        meta: {
          icon: 'ios-color-filter-outline',
          title: '部门设置'
        },
        component: () => import('@/view/permissions/permissions_institutions.vue')
      }
    ]
  },
  {
    path: '/scale',
    name: 'scale',
    meta: {
      icon: 'ios-list-box-outline',
      title: '量表管理'
    },
    component: Main,
    children: [
      {
        path: 'scale_classification',
        name: 'scale_classification',
        meta: {
          icon: 'md-list',
          title: '量表分类'
        },
        component: () => import('@/view/scale/scale_classification.vue')
      },
      {
        path: 'scale_explain',
        name: 'scale_explain',
        meta: {
          icon: 'md-link',
          title: '量表解释'
        },
        component: () => import('@/view/scale/scale_explain.vue')
      },
      {
        path: 'scale_interface',
        name: 'scale_interface',
        meta: {
          icon: 'ios-leaf-outline',
          title: '量表计算接口'
        },
        component: () => import('@/view/scale/scale_interface.vue')
      },
      {
        path: 'scale_questions',
        name: 'scale_questions',
        meta: {
          icon: 'ios-key-outline',
          title: '量表试题对应'
        },
        component: () => import('@/view/scale/scale_questions.vue')
      }
    ]
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      icon: 'md-cloud-upload',
      title: '报告管理'
    },
    component: Main,
    children: [
      {
        path: 'report_view',
        name: 'report_view',
        meta: {
          icon: 'ios-document',
          title: '报告分类'
        },
        component: parentView,
        children: [
          {
            path: 'report_view_analysis',
            name: 'report_view_analysis',
            meta: {
              icon: 'ios-document',
              title: '分析报告'
            },
            component: () => import('@/view/report/report_view/report_view_analysis.vue')
          },
          {
            path: 'report_view_opinion',
            name: 'report_view_opinion',
            meta: {
              icon: 'ios-document',
              title: '诊断意见'
            },
            component: () => import('@/view/report/report_view/report_view_opinion.vue')
          }
        ]
      },
      {
        path: 'report_settings',
        name: 'report_settings',
        meta: {
          icon: 'md-clipboard',
          title: '报告设置'
        },
        component: () => import('@/view/report/report_settings.vue')
      },
      {
        path: 'report_print',
        name: 'report_print',
        meta: {
          icon: 'md-clipboard',
          title: '打印报告'
        },
        component: () => import('@/view/report/report_print.vue')
      },
      {
        path: 'small_program',
        name: 'small_program',
        meta: {
          icon: 'md-clipboard',
          title: '打印报告'
        },
        component: () => import('@/view/report/small_program.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      icon: 'md-cloud-upload',
      title: '测试管理'
    },
    component: Main,
    children: [
      {
        path: 'test_questions',
        name: 'test_questions',
        meta: {
          icon: 'ios-document',
          title: '测试题'
        },
        component: () => import('@/view/test/test_questions.vue')
      },
      {
        path: 'test_small_program',
        name: 'test_small_program',
        meta: {
          icon: 'md-clipboard',
          title: '小程序接口'
        },
        component: () => import('@/view/test/test_small_program.vue')
      }
    ]
  },
  {
    path: '/statistical',
    name: 'statistical',
    meta: {
      icon: 'md-cloud-upload',
      title: '统计管理'
    },
    component: Main,
    children: [
      {
        path: 'statistical_use',
        name: 'statistical_use',
        meta: {
          icon: 'ios-document',
          title: '使用量'
        },
        component: () => import('@/view/statistical/statistical_use.vue')
      },
      {
        path: 'statistical_symptoms',
        name: 'statistical_symptoms',
        meta: {
          icon: 'md-clipboard',
          title: '病症统计'
        },
        component: () => import('@/view/statistical/statistical_symptoms.vue')
      },
      {
        path: 'statistical_system',
        name: 'statistical_system',
        meta: {
          icon: 'md-clipboard',
          title: '系统统计'
        },
        component: () => import('@/view/statistical/statistical_system.vue')
      },
      {
        path: 'statistical_industry',
        name: 'statistical_industry',
        meta: {
          icon: 'md-clipboard',
          title: '行业统计'
        },
        component: () => import('@/view/statistical/statistical_industry.vue')
      },
      {
        path: 'statistical_age',
        name: 'statistical_age',
        meta: {
          icon: 'md-clipboard',
          title: '年龄分析'
        },
        component: () => import('@/view/statistical/statistical_age.vue')
      }
    ]
  },
  {
    path: '/quality',
    name: 'quality',
    meta: {
      icon: 'md-cloud-upload',
      title: '质检管理'
    },
    component: Main,
    children: [
      {
        path: 'quality_cases',
        name: 'quality_cases',
        meta: {
          icon: 'ios-document',
          title: '病例填写'
        },
        component: () => import('@/view/quality/quality_cases.vue')
      }
    ]
  },
  {
    path: '/customer',
    name: 'customer',
    meta: {
      icon: 'md-cloud-upload',
      title: '质检管理'
    },
    component: Main,
    children: [
      {
        path: 'customer_user',
        name: 'customer_user',
        meta: {
          icon: 'ios-document',
          title: '用户管理'
        },
        component: () => import('@/view/customer/customer_user.vue')
      },
      {
        path: 'customer_industry',
        name: 'customer_industry',
        meta: {
          icon: 'ios-document',
          title: '行业管理'
        },
        component: () => import('@/view/customer/customer_industry.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'md-cloud-upload',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'system_password',
        name: 'system_password',
        meta: {
          icon: 'ios-document',
          title: '修改密码'
        },
        component: () => import('@/view/system/system_password.vue')
      },
      {
        path: 'system_databackup',
        name: 'system_databackup',
        meta: {
          icon: 'ios-document',
          title: '数据备份'
        },
        component: () => import('@/view/system/system_databackup.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: '可拖拽抽屉'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: '树状表格'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: '图片裁剪'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: '工具方法',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: 'i18n_page',
        meta: {
          icon: 'md-planet',
          title: 'i18n - {{ i18n_page }}'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  {
    path: '/error_store',
    name: 'error_store',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: '错误收集'
        },
        component: () => import('@/view/single-page/error-logger.vue')
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/view/directive/directive.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
