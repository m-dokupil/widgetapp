# Widget Library Test Application

This is a simple test application that demonstrates the initialization, destruction, and status management of widgets within a DOM tree. The application is designed to work in both browser and Node.js environments. It uses Bootstrap for styling and provides a user-friendly interface for interacting with the widgets.

## Features

- **Initialize Widgets**: Recursively initialize widgets from the root node.
- **Destroy Widgets**: Recursively destroy widgets starting from a selected node.
- **Status Management**: Mark widgets as "done" or "failed" and display their status.
- **Selection**: Click on widgets to select them and apply operations only to the selected widget.
- **Info Display**: Show the status of each widget instance in a dedicated info block.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/widget-library-test.git
cd widget-library-test
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:
To avoid CORS:

```
npm install -g http-server
http-server -c-1 --cors 
```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Selecting Widgets

- Click on any widget within the tree to select it. The selected widget will be highlighted with a blue border.

### Buttons

- **Init**: Initializes all widgets starting from the root node. Any errors during initialization will be displayed in the console and an alert will show the error message.
- **Destroy**: Destroys the selected widget and its children. If no widget is selected, an alert will notify you.
- **Done**: Marks the selected widget as "done". If no widget is selected or the widget is not initialized, an alert will notify you.
- **Fail**: Marks the selected widget as "failed". If no widget is selected or the widget is not initialized, an alert will notify you.

### Info Block

- The info block displays the status of all widget instances within the tree. It shows the node, instance name, and current status (initialized, done, or failed).

## Code Overview

### `X.js`

This file contains the core logic for the widget library:

- **Class `Widget`**: Base class for all widgets with `init` and `destroy` methods.
- **Class `X`**: Main class with static methods `init` and `destroy` for initializing and destroying widgets.

### `test.html`

This file contains the HTML structure and user interface:

- **Bootstrap**: Used for styling the interface.
- **Event Listeners**: Added to buttons for handling initialization, destruction, and status management of widgets.
- **Info Update**: Function to update the info block with the status of widget instances.

### `Node.test.js`

This file contains a simple test for NodeJS env

## Example

Here is an example of how the HTML structure looks like with widgets:

```html
<div id="root" class="p-3 mb-3 border">
    <div widget="widgets/a" class="p-3 mb-2 border">
        <div widget="widgets/b" class="p-3 mb-2 border"></div>
    </div>
    <div widget="widgets/c" class="p-3 mb-2 border"></div>
</div>
```
