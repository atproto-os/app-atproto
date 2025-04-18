export default {
    id: "org.owdproject.atproto",
    title: "Account",
    category: "internet",
    provides: {
        name: "auth",
        entry: "atproto",
    },
    icon: "weui:at-filled",
    windows: {
        account: {
            component: () => import('./app/components/Window/WindowAtprotoAccount.vue'),
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
    entries: {
        atproto: {
            command: "atproto"
        },
    },
    commands: {
        atproto: (app: IApplicationController, args) => {
            if (['login', 'account'].includes(args[0])) {
                app.openWindow("account")
            }
        }
    },
}