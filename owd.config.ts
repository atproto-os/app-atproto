export default defineDesktopApp({
    id: "org.owdproject.atproto",
    name: "Account",
    category: "internet",
    provides: "auth",
    icon: "weui:at-filled",
    windows: {
        account: {
            component: () => import('./app/components/Window/WindowAtprotoAccount.vue'),
            category: "internet",
            title: "Login",
            icon: "weui:at-filled",
            pinned: true,
            resizable: false,
            size: {
                width: 400,
                height: 500
            },
            position: {
                x: 400,
                y: 240,
                z: 0
            },
        }
    },
    commands: {
        atproto: (app: IApplicationController, args) => {
            if (['login', 'account'].includes(args[0])) {
                app.openWindow("account")
            }
        }
    },
    onLaunch: (app) => {
        app.openWindow('account')
    }
})