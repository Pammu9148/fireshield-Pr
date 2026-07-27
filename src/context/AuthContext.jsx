import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Master list of all registered users (for Admin Dashboard)
  const [usersList, setUsersList] = useState(() => {
    const savedUsers = localStorage.getItem('fireShield_users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, name: 'Admin User', email: 'admin@fireshield.com', role: 'Admin', joinedDate: '2026-01-15' }
    ];
  });

  // Currently logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('fireShield_currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save usersList to LocalStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('fireShield_users', JSON.stringify(usersList));
  }, [usersList]);

  // Save currentUser to LocalStorage whenever it updates
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('fireShield_currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('fireShield_currentUser');
    }
  }, [currentUser]);

  // Handle User Sign Up
  const signup = (userData) => {
    const newUser = {
      id: Date.now(),
      name: userData.name || userData.email.split('@')[0],
      email: userData.email,
      password: userData.password,
      role: 'User',
      joinedDate: new Date().toISOString().split('T')[0],
    };

    setUsersList((prev) => [...prev, newUser]);
    setCurrentUser(newUser); // Automatically log in on sign up
    return true;
  };

  // Handle User Login
  const login = (email, password) => {
    // Look up existing user
    const existingUser = usersList.find((u) => u.email === email);

    if (existingUser) {
      setCurrentUser(existingUser);
      return { success: true };
    } else {
      // Create session for demo user if not found
      const newUser = {
        id: Date.now(),
        name: email.split('@')[0],
        email: email,
        role: 'User',
        joinedDate: new Date().toISOString().split('T')[0],
      };
      setUsersList((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      return { success: true };
    }
  };

  // Handle Logout
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, usersList, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);