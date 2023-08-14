# TWG Messenger App

node: 18.14.1
expo: 49.0.7


This is a simple messenger app developed for The Widlarz Group's recruitment process. The app allows users to communicate with the TWG team via chat rooms.

## Features

- List of rooms: Displays a list of available chat rooms.
- Chat screen: Opens a chat room when a user selects a room from the list.
- Sending and receiving messages: Users can send and receive messages in the chat room with polling.
- UI Mockup: The app recreates the provided UI mockup, ensuring a consistent and visually appealing design.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Create an `.env` file in the root of your project and add the following environment variables:

            EXPO_PUBLIC_API_URL=https://chat.thewidlarzgroup.com/api/graphql
            EXPO_PUBLIC_API_KEY=your_api_key_here

    Replace `your_api_key_here` with your actual API key.
4. Run the app using Expo: `expo start`.
5. Scan the QR code with the Expo mobile app to launch the app on your device.

## Technologies Used

- React Native: A framework for building mobile applications using React.
- Apollo Client: A GraphQL client that handles data fetching and state management.
- React Navigation: Library for implementing navigation between screens.
- React Native Gifted Chat: A UI library for building chat interfaces.
- Expo: Toolchain for developing and building React Native apps.

## API Consumption

- URL: `https://chat.thewidlarzgroup.com/api/graphql`
- WS URL: `wss://chat.thewidlarzgroup.com/socket`
- PLAYGROUND: `https://chat.thewidlarzgroup.com/api/graphiql`

## Usage

1. Open the app.
2. Browse the list of available chat rooms.
3. Select a room to enter the chat.
4. Send and receive messages in the chat room.

## Your Reflections

Throughout the development of this project, I had the opportunity to enhance my skills and tackle various challenges. Some key takeaways and personal reflections from this experience include:

- **Learning Curve:** Working with React Native, GraphQL, and Gifted Chat was initially a steep learning curve for me. However, by following the documentation, tutorials, and examples, I was able to grasp the concepts and apply them effectively.

- **UI Styling:** Recreating the provided UI mockup was both challenging and rewarding. I gained valuable experience in styling components, managing layouts, and achieving a consistent design.

- **Problem Solving:** Debugging and troubleshooting issues with API calls, dependencies, and environment setup required problem-solving skills. Each problem I encountered became an opportunity for growth and learning.

- **Time Management:** Balancing feature implementation, code quality, and adherence to project requirements taught me the importance of effective time management and prioritization.

- **Communication:** While I primarily relied on documentation and online resources, I also demonstrated the ability to reach out for assistance when I encountered complex issues. Clear communication and seeking help when needed were essential to my progress.

**Note:** This project was developed as part of a technical assignment for The Widlarz Group. The app is intended to demonstrate skills in React Native, GraphQL, and user interface design.
