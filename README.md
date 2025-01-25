# Frontend Developer Task
> task based assessment for Frontend Developer Position at Vrit Technologies

## Task Description
1. **Code Runner Clone**
    *site link*: [coderunner](https://compiler.skillshikshya.com/)
    *websocket backend connection documentation was provided to the candidate*
    
2. **Figma Animation Replication**
    *design link*: [figma](https://www.figma.com/design/6dYBIvBiVpsscffqH1dcjR/)



## Installation Guide
1. Clone this repository
2. Open the folder in terminal
3. Create `.env` file in *root folder*
    ```json
    NEXT_PUBLIC_WEBSOCKET_URL="<websocket connection url>"
    ```
4. Install all dependencies
    ```bash
    npm install
    ```
5. Run the project in development mode
    ```bash
    npm run dev
    ```
6. Open `http://localhost:3000/`


## Solution
> both tasks are managed in a common **nextjs** project
1. **Task1**
    components were structured as
    > routed to `/task1`
    ```
    - Task1
        |- Navbar
        |- Sidebar
        |- Interface
            |- EditorComponent
            |- OutputComponent
    ```

    * Task1
        This component bundles all the components collecting global states (`language`, `editor theme`, `controlFlows`) and constants (`languageList`, `themeList`). It also sends control signals to other Components.
    
    * Navbar
        This component renders the navbar of the webpage. It contains `Logo`, `Name`, `Language Dropdown`, `Theme Dropdown`, `Start Button`, `Stop Button`

    * Sidebar
        This component constains a list of languages with their logo to select within them. It calls a callback on `Task1` when change is detected.

    * Interface
        This component wraps the `EditorComponent` and `OutputComponent`. It is responsible for the `websocket` connection.

    * EditorComponent
        This component is responsible to collect code, used using `uiw/react-codemirror`

    * OutputComponent
        This component is responsible for showing the output from `Interface` and has a *clear* button to clear the output.


2. **Task2**
    The figma design was implemented using /**NEXT/REACT Component** and basic **CSS** modules.
    > routed to `/task2`

    Breakdown of Component
    ```
    - Task2
        |- Card
    ```

    * Task2
        This component is responsible for the structure of the design and to hold details like the currently active `Card` along with calculations for position of *illustrations* in individual cards
    
    * Card
        This component is responsible for rendering a `Card` and managing their animations using modular `CSS`

## Deployment
> deployed using `vercel`
