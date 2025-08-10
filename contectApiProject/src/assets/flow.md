+-----------------------------+
|        UserContext.js       |
|-----------------------------|
| export const UserContext =  |
|    React.createContext();   |
+-----------------------------+
             ▲
             |
             | (import & use)
             |
+--------------------------------+
|   UserContextProvider.js       |
|--------------------------------|
| const [user, setUser] =        |
|    useState(null)              |
|                                |
| <UserContext.Provider          |
|   value={{ user, setUser }}>   |
|   {children}                   |
| </UserContext.Provider>        |
+--------------------------------+
             ▲
             |
             | (wraps children in provider)
             |
+----------------------------+
|         App.js             |
|----------------------------|
| <UserContextProvider>      |
|    <Login />               |
| </UserContextProvider>     |
+----------------------------+
             |
             v
+----------------------------+
|        Login.js            |
|----------------------------|
| const [username, setUsername] |
| const [password, setPassword] |
|                              |
| const { setUser } =          |
|   useContext(UserContext)    |
|                              |
| onClick: setUser({           |
|   username, password })      |
+----------------------------+

