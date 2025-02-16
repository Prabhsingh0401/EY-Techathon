import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./NewPostForum";
import Footer from "../Footer/Footer";

const Forums = () => {
    // Initialize posts from localStorage or use default if nothing in storage
    const [posts, setPosts] = useState(() => {
        const savedPosts = sessionStorage.getItem('forumPosts');
        if (savedPosts) {
            return JSON.parse(savedPosts);
        }
        return [{
            author: "Ram",
            timestamp: "5 hours ago",
            title: "What documents do I need to open a bank account in India?",
            content: `To open a bank account in India, you need to provide documents as per the KYC (Know Your Customer) guidelines:
            1. Aadhaar Card – Serves as both identity and address proof.
            2. PAN Card – Required for financial transactions; if unavailable, Form 60 can be submitted.
            3. Voter ID / Ration Card – Alternative address proof if Aadhaar is unavailable.
            4. Passport-size Photos – Usually, two recent photos are required.
            5. Mobile Number Linked to Aadhaar – For OTP verification and digital transactions.
            For Jan Dhan Accounts, Aadhaar alone is enough, and no minimum balance is required.`
        }];
    });

    // Update sessionStorage whenever posts change
    useEffect(() => {
        sessionStorage.setItem('forumPosts', JSON.stringify(posts));
    }, [posts]);

    // Listen for storage events from other tabs
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'forumPosts') {
                setPosts(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleNewPost = (newPost) => {
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
    };

    return (
        <>
            <NavBar />
            <header className="flex w-full bg-[#030303] p-2" />
            
            {/* BANNER */}
            <div 
                className="h-64 bg-cover bg-center" 
                style={{backgroundImage:'url("https://img.freepik.com/premium-photo/cup-coffee-camera-keyboard-glasses-black-background-3d-illustration_291814-821.jpg?w=900")'}}
            />

            {/* TITLE SECTION */}
            <div className="bg-[#272728]" />

            {/* Create Post Dialog */}
            <CreatePostModal onPostCreated={handleNewPost} />

            {/* Posts List */}
            <div className="space-y-4 mt-4">
                {posts.map((post, index) => (
                    <ForumPost key={index} post={post}/>
                ))}
            </div>

            <Footer></Footer>
        </>
    );
};

export default Forums;