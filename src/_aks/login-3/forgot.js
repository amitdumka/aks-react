export default function ForgotPassword(){
  return(
<div
  id="kt_body"
  class="
    header-fixed header-mobile-fixed
    subheader-enabled subheader-fixed
    aside-enabled aside-fixed aside-minimize-hoverable
    page-loading
  "
>
  
  <div class="d-flex flex-column flex-root">
   <div
      class="
        login login-3
        wizard
        d-flex
        flex-column flex-lg-row flex-column-fluid
      "
    >
      {/* <!--begin::Aside--> */}
      <div class="login-aside d-flex flex-column flex-row-auto">
        {/* <!--begin::Aside Top--> */}
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          {/* <!--begin::Aside Header--> */}
          <a href="#" class="login-logo text-center pt-lg-25 pb-10">
            <img
              src="assets/media/logos/logo-1.png"
              class="max-h-70px"
              alt=""
            />
          </a>
          {/* <!--end::Aside Header-->
          <!--begin::Aside Title--> */}
          <h3
            class="
              font-weight-bolder
              text-center
              font-size-h4
              text-dark-50
              line-height-xl
            "
          >
            User Experience &amp; Interface Design <br />Strategy SaaS Solutions
          </h3>
          {/* <!--end::Aside Title--> */}
        </div>
        {/* <!--end::Aside Top-->
        <!--begin::Aside Bottom--> */}
        <div
          class="
            aside-img
            d-flex
            flex-row-fluid
            bgi-no-repeat bgi-position-x-center
          "
          style="
            background-position-y: calc(100% + 5rem);
            background-image: url(assets/media/svg/illustrations/login-visual-5.svg);
          "
        ></div>
        {/* <!--end::Aside Bottom--> */}
      </div>
      {/* <!--begin::Aside-->
      <!--begin::Content--> */}
      <div class="login-content flex-column-fluid d-flex flex-column p-10">
        {/* <!--begin::Top--> */}
        <div class="text-right d-flex justify-content-center">
          <div
            class="
              top-forgot
              text-right
              d-flex
              justify-content-end
              pt-5
              pb-lg-0 pb-10
            "
          >
            <span class="font-weight-bold text-muted font-size-h4"
              >Having issues?</span
            >
            <a
              href="javascript:;"
              class="font-weight-bold text-primary font-size-h4 ml-2"
              id="kt_login_signup"
              >Get Help</a
            >
          </div>
        </div>
        {/* <!--end::Top-->
        <!--begin::Wrapper--> */}
        <div class="d-flex flex-row-fluid flex-center">
          <!--begin::Forgot-->
          <div class="login-form">
            {/* <!--begin::Form--> */}
            <form class="form" id="kt_login_forgot_form" action="">
              {/* <!--begin::Title--> */}
              <div class="pb-5 pb-lg-15">
                <h3
                  class="
                    font-weight-bolder
                    text-dark
                    font-size-h2 font-size-h1-lg
                  "
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              {/* <!--end::Title-->
              <!--begin::Form group--> */}
              <div class="form-group">
                <input
                  class="
                    form-control
                    h-auto
                    py-7
                    px-6
                    border-0
                    rounded-lg
                    font-size-h6
                  "
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
              </div>
              {/* <!--end::Form group-->
              <!--begin::Form group--> */}
              <div class="form-group d-flex flex-wrap">
                <button
                  type="submit"
                  id="kt_login_forgot_form_submit_button"
                  class="
                    btn btn-primary
                    font-weight-bolder font-size-h6
                    px-8
                    py-4
                    my-3
                    mr-4
                  "
                >
                  Submit
                </button>
                <a
                  href="custom/pages/login/login-3/signin.html"
                  id="kt_login_forgot_cancel"
                  class="
                    btn btn-light-primary
                    font-weight-bolder font-size-h6
                    px-8
                    py-4
                    my-3
                  "
                  >Cancel</a
                >
              </div>
              {/* <!--end::Form group--> */}
            </form>
            {/* <!--end::Form--> */}
          </div>
          {/* <!--end::Forgot--> */}
        </div>
        {/* <!--end::Wrapper--> */}
      </div>
      {/* <!--end::Content--> */}
    </div>
    {/* <!--end::Login--> */}
  </div>
  {/* <!--end::Main--> */}
  <script>
    var HOST_URL =
      "https://preview.keenthemes.com/metronic/theme/html/tools/preview";
  </script>
  {/* <!--begin::Global Config(global config for global JS scripts)--> */}
  {/* <script>
    var KTAppSettings = {
      breakpoints: { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 },
      colors: {
        theme: {
          base: {
            white: "#ffffff",
            primary: "#3699FF",
            secondary: "#E5EAEE",
            success: "#1BC5BD",
            info: "#8950FC",
            warning: "#FFA800",
            danger: "#F64E60",
            light: "#E4E6EF",
            dark: "#181C32",
          },
          light: {
            white: "#ffffff",
            primary: "#E1F0FF",
            secondary: "#EBEDF3",
            success: "#C9F7F5",
            info: "#EEE5FF",
            warning: "#FFF4DE",
            danger: "#FFE2E5",
            light: "#F3F6F9",
            dark: "#D6D6E0",
          },
          inverse: {
            white: "#ffffff",
            primary: "#ffffff",
            secondary: "#3F4254",
            success: "#ffffff",
            info: "#ffffff",
            warning: "#ffffff",
            danger: "#ffffff",
            light: "#464E5F",
            dark: "#ffffff",
          },
        },
        gray: {
          "gray-100": "#F3F6F9",
          "gray-200": "#EBEDF3",
          "gray-300": "#E4E6EF",
          "gray-400": "#D1D3E0",
          "gray-500": "#B5B5C3",
          "gray-600": "#7E8299",
          "gray-700": "#5E6278",
          "gray-800": "#3F4254",
          "gray-900": "#181C32",
        },
      },
      "font-family": "Poppins",
    };
  </script> */}
  
  {/* <!--begin::Page Scripts(used by this page)--> */}
  <script src="assets/js/pages/custom/login/login-3.js"></script>

</div>
);}
