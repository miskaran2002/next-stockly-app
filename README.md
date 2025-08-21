# Stockly

Build a simple application using **Next.js 15 (App Router)**. The app has public and protected pages with basic authentication using **NextAuth.js**. Users can view a landing page, visit product details, and after logging in, access a protected product management page to add new products.

---

## Core Features

1. **Landing Page (`/`)**  
   - Includes 4 sections: Navbar, Hero, Product Highlights, Footer  
   - Navigation to login and products  
   - No authentication required

2. **Login with NextAuth (`/login`)**  
   - Social login (e.g., Google) or credential login using NextAuth  
   - Redirects to `/products` after successful login

3. **Product List Page (`/products`)**  
   - Publicly accessible  
   - Fetch and show a list of products  
   - Each product includes: name, description, price, image, and a details button

4. **Product Details Page (`/products/[id]`)**  
   - Show full details of a single product  
   - Publicly accessible

5. **Protected Page: Add Product (`/dashboard/add-product`)**  
   - Accessible only when logged in  
   - Form to add a new product and store it in the database  
   - Redirects unauthenticated users to login

---

## Optional Enhancements
- Show a loading spinner when submitting forms  
- Display toast message on successful product addition  


---

## Technologies Used
- **Next.js 15** (App Router)  
- **NextAuth.js** for authentication  
- **Tailwind CSS** for styling  
- **Framer Motion** for animations  
- **MongoDB** for backend storage (via API routes)  

---

## Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)  
- npm, yarn, or pnpm  
- MongoDB Atlas account

### Steps
1. Clone the repository:  
```bash
git clone <your-repo-url>
cd <your-repo-folder>
