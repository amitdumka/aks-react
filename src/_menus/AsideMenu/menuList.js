// List of Aside menu Declated.
// TODO: need to make a combine menu list so can be used with mneu setting to configure every things and enable disable menu item
// with  asigning to aside , header or both.
//Templete menus
const TempleteMenuKist = [
  {
    id: 1,
    headerMenuLabel: "Header Menu Label",
    headerMenuUrl: "/toPath",
    icon: "path to icon file",
    enable: true,
    hasChild: true,
    subMenuList: [
      {
        id: 1,
        label: "Sub Menu 1",
        url: "/toPath",
        icon: "",
        subMenuList: null,
        hasChild: false,
        enable: true,
      },
      {
        id: 2,
        label: "Sub Nenu 2",
        url: "/topath",
        icon: "",
        subMenuList: [
          {
            id: 1,
            label: "Sub Menu 3",
            url: "/topath",
            icon: "",
            enable: true,
          },
          {
            id: 2,
            label: "Sub Menu 3",
            url: "/topath",
            icon: "",
            enable: true,
          },
          {
            id: 3,
            label: "Sub Menu 3",
            url: "/topath",
            icon: "",
            enable: true,
          },
        ],
        hasChild: true,
        enable: true,
      },
      {
        id: 3,
        label: "Sub Menu 3",
        url: "/topath",
        icon: "",
        subMenuList: [
          {
            id: 1,
            label: "Sub Menu 3",
            url: "/topath",
            icon: "",
            enable: true,
          },
          {
            id: 2,
            label: "Sub Menu 3",
            url: "/topath",
            icon: "",
            enable: true,
          },
        ],
        hasChild: false,
        enable: true,
      },
    ],
  },
];

export const TailoringMenuList = [
  {
    id: 1,
    headerMenuLabel: "Tailoring",
    headerMenuUrl: "/tailoring",
    icon: "/media/svg/icons/Communication/Add-user.svg",
    enable: true,
    hasChild: true,
    subMenuList: [
      {
        label: "Booking",
        url: "/tailoring/booking",
        icon: "",
        subMenuList: null,
        hasChild: false,
        enable: true,
      },
      {
        label: "Delivery",
        url: "/tailoring/delivery",
        icon: "",
        subMenuList: null,
        hasChild: false,
        enable: true,
      },
      {
        label: "Pending",
        url: "/tailoring/pending",
        icon: "",
        subMenuList: null,
        hasChild: false,
        enable: true,
      },
    ],
  },
];

export const ReportMenuList = [
    {
      id: 1,
      headerMenuLabel: "Reports",
      headerMenuUrl: "/reports",
      icon: "/media/svg/icons/Communication/Add-user.svg",
      enable: true,
      hasChild: true,
      subMenuList: [
        {
          label: "Finance",
          url: "/tailoring/booking",
          icon: "",
          subMenuList: [
            {
              id: 1,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
            {
              id: 2,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
          ],
          hasChild: true,
          enable: true,
        },
        {
          label: "Payments",
          url: "/tailoring/delivery",
          icon: "",
          subMenuList: [
            {
              id: 1,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
            {
              id: 2,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
          ],
          hasChild: true,
          enable: true,
        },
        {
          label: "Recipts",
          url: "/tailoring/pending",
          icon: "",
          subMenuList: [
            {
              id: 1,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
            {
              id: 2,
              label: "Sub Menu 3",
              url: "/topath",
              icon: "",
              enable: true,
            },
          ],
          hasChild: true,
          enable: true,
        },
        {
            label: "Electricity",
            url: "/tailoring/pending",
            icon: "",
            subMenuList: null,
            hasChild: false,
            enable: true,
          },
      ],
    },
    
  ];
  