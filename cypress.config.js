import { defineConfig, defineCOnfig } from "cypress"

export default defineConfig({
chromeWebSecurity: false
e2e: {
    setupNodeEvents(on, defineConfig){
        // implement

    }
}

})