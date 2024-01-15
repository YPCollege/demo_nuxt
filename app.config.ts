// The app.config.ts file, located in the source directory
// (by default the root of the project),
// is used to expose public variables that can be determined at build time.

type SubAppConfig = {
    app_name: string
    naming: { [key: string]: string }
}

type AppConfig = {
    installed_apps: { [key: string]: SubAppConfig}
}

export default defineAppConfig<AppConfig>({
    installed_apps: {
        "hello-world": {app_name: "hello-world", naming: {}},
        "uinfo": {app_name: "用户信息", naming: {app: "个人主页"}}
    }
})
