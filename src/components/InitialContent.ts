export const initialContent = `<div class="container">
<header>
    <h1>Understanding Tailwind CSS: The Future of Utility-First CSS Frameworks</h1>
    <p>In the ever-evolving world of web development, staying updated with the latest tools and frameworks is essential. One such tool that has been gaining traction is <strong>Tailwind CSS</strong>. Known for its utility-first approach, Tailwind CSS has revolutionized how developers think about styling their web applications. In this blog post, we’ll dive into what Tailwind CSS is, explore its advantages, and provide some HTML code examples to illustrate its power and flexibility.</p>
</header>

<section>
    <h2>What is Tailwind CSS?</h2>
    <p>Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Unlike traditional CSS frameworks like Bootstrap or Foundation, which provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
</section>

<section>
    <h2>Advantages of Tailwind CSS</h2>
    <ul>
        <li><strong>Customization and Flexibility</strong>: Tailwind CSS allows developers to create unique designs without having to override existing styles. With utility classes, you can fine-tune your design directly in your HTML.</li>
        <li><strong>Efficiency and Speed</strong>: Writing styles directly in the HTML with utility classes speeds up the development process. There’s no need to switch between HTML and CSS files, reducing context switching and improving productivity.</li>
        <li><strong>Responsive Design Made Easy</strong>: Tailwind provides built-in responsive design classes that make it easy to create designs that look great on any screen size. You can control layout, spacing, typography, and more based on the screen size using intuitive class names.</li>
        <li><strong>Consistent Styling</strong>: Utility classes ensure a consistent look and feel throughout your application. By reusing the same set of classes, you can maintain design consistency without worrying about CSS specificity issues.</li>
        <li><strong>Minimal CSS File Size</strong>: Tailwind CSS includes a built-in purging tool that removes unused CSS classes, resulting in a smaller file size and faster load times for your web application.</li>
        <li><strong>Active Community and Ecosystem</strong>: Tailwind CSS has a vibrant community and a rich ecosystem of plugins and extensions that can further enhance its functionality.</li>
    </ul>
</section>

<section>
    <h2>HTML Code Examples</h2>
    <p>Let’s take a look at some practical examples to see Tailwind CSS in action.</p>
    
    <div>
        <h3>1. Basic Button Styling</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Tailwind CSS Example&lt;/title&gt;
&lt;/head&gt;
&lt;body style="background-color: #f7fafc; display: flex; align-items: center; justify-content: center; height: 100vh;"&gt;

&lt;button style="background-color: #4299e1; color: #fff; font-weight: bold; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; cursor: pointer;" 
    onmouseover="this.style.backgroundColor='#2b6cb0'" 
    onmouseout="this.style.backgroundColor='#4299e1'"&gt;
Click Me
&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>
    </div>

    <div>
        <h3>2. Responsive Card Component</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Tailwind CSS Card&lt;/title&gt;
&lt;/head&gt;
&lt;body style="background-color: #f7fafc; padding: 1rem;"&gt;

&lt;div style="max-width: 20rem; margin: 0 auto; background-color: #fff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.5rem; overflow: hidden;"&gt;
&lt;img style="width: 100%; height: 12rem; object-fit: cover;" src="https://via.placeholder.com/400x300" alt="Card Image"&gt;
&lt;div style="padding: 1rem;"&gt;
    &lt;h3 style="font-size: 1.25rem; font-weight: semi-bold; color: #2d3748;"&gt;Card Title&lt;/h3&gt;
    &lt;p style="font-size: 1rem; color: #718096;"&gt;This is a description of the card. Tailwind CSS makes it easy to style components like this.&lt;/p&gt;
    &lt;div style="margin-top: 1rem;"&gt;
        &lt;button style="background-color: #4299e1; color: #fff; font-weight: bold; padding: 0.5rem 1rem; border-radius: 0.25rem; border: none; cursor: pointer;" 
                onmouseover="this.style.backgroundColor='#`