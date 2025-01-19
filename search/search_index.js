var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome to Knowledge Bank","text":""},{"location":"index.html#your-gateway-to-technical-mastery","title":"Your Gateway to Technical Mastery","text":"<p>Welcome to the Knowledge Bank, your comprehensive resource for technical expertise and cutting-edge information. Dive into a wealth of topics and join a vibrant community of learners and professionals.</p>"},{"location":"index.html#featured-topics","title":"Featured Topics","text":"<ul> <li>Software Development</li> <li>Web Technologies</li> <li>DevOps &amp; Automation</li> <li>Data Management</li> <li>Cloud Computing</li> <li>Emerging Technologies</li> <li>Tools &amp; Techniques</li> </ul>"},{"location":"index.html#get-involved","title":"Get Involved","text":"<ul> <li>Collaborate: Share your knowledge and experiences with the community.</li> <li>Learn Together: Connect with others and explore new ideas.</li> </ul> <p>Explore, learn, and master the latest in technology with the Knowledge Bank!</p>"},{"location":"docs.html","title":"Documentation Overview","text":"<p>Welcome to the documentation portal. Here you'll find comprehensive guides and resources on a variety of technologies and topics.</p>"},{"location":"docs.html#table-of-contents","title":"Table of Contents","text":"<ul> <li>GitHub Documentation</li> <li>Effective Prompt Documentation</li> <li>Excel</li> <li>NodeJs</li> <li>ReactJs</li> <li>Database and its Evolutions</li> <li>Big Data</li> <li>Backend Design Pattern</li> <li>Playwright</li> <li>Google Tag Manager</li> <li>References</li> </ul>"},{"location":"tech/big-data.html","title":"Big Data and Modern Database Systems","text":""},{"location":"tech/big-data.html#1-introduction-to-big-data","title":"1. Introduction to Big Data","text":"<p>Big Data represents a shift in how data is generated, managed, and utilized in various industries, offering insights for decision-making, product adaptation, and operations improvement.</p> <p>Key Characteristics of Big Data:</p> <ul> <li>Volume: Large scale of data generated from various sources.</li> <li>Variety: Data in multiple formats (e.g., structured, semi-structured, unstructured).</li> <li>Velocity: High speed of data generation and need for real-time processing.</li> <li>Veracity: Ensuring data quality and managing inconsistencies and uncertainties.</li> </ul>"},{"location":"tech/big-data.html#2-database-systems-overview","title":"2. Database Systems Overview","text":"<p>Modern database systems are categorized by how they store and handle data. The two primary types are Relational Database Management Systems (RDBMS) and NoSQL Databases.</p>"},{"location":"tech/big-data.html#relational-database-management-systems-rdbms","title":"Relational Database Management Systems (RDBMS)","text":"<ul> <li>Primary Use: Structured data, such as web and business applications.</li> <li>Key Features: SQL-based querying, defined schemas, ACID transactions for consistency.</li> <li>Limitations: Limited scalability and flexibility for semi-structured or unstructured data.</li> </ul>"},{"location":"tech/big-data.html#nosql-databases","title":"NoSQL Databases","text":"<p>Designed for high-scale, distributed environments with flexible data handling capabilities, NoSQL databases address the limitations of RDBMS.</p> <p>Types of NoSQL Databases:</p> <ol> <li>Key-Value Stores: Data stored in key-value pairs.</li> <li>Document-Oriented: Stores complex data structures as documents.</li> <li>Column-Family: Organizes data in columns for high-volume queries.</li> <li>Graph Databases: Optimized for relationships between entities (e.g., social networks).</li> </ol> <p>Advantages of NoSQL Databases:</p> <ul> <li>Elastic Scaling: Scalability through horizontal scaling.</li> <li>Flexible Data Models: Supports dynamic, schema-less data.</li> <li>Cost-Efficiency: Uses distributed, low-cost commodity servers.</li> <li>Minimal DBA Dependence: Often comes with self-tuning and automatic distribution features.</li> </ul> <p>Challenges of NoSQL Databases:</p> <ul> <li>Maturity: Some are still in developmental stages.</li> <li>Support: Mostly open-source with limited commercial backing.</li> <li>Complexity in Analytics: Limited ad-hoc querying; requires programming for complex queries.</li> <li>Expertise: High demand for specialists with NoSQL knowledge.</li> </ul>"},{"location":"tech/big-data.html#newsql-databases","title":"NewSQL Databases","text":"<p>An evolution of SQL-based systems designed to handle Big Data\u2019s scale with the consistency and querying power of RDBMS, but with the distributed capabilities of NoSQL.</p>"},{"location":"tech/big-data.html#3-data-modeling-in-nosql","title":"3. Data Modeling in NoSQL","text":"<p>NoSQL databases vary in their data models, affecting how data is stored, retrieved, and processed.</p> <p>Aggregate-Oriented Models:</p> <ul> <li>Organize data in units of related information, or aggregates, for optimized performance in distributed systems.</li> <li>Support for atomic manipulation of a single aggregate at a time.</li> </ul> <p>Aggregate-Ignorant Models:</p> <ul> <li>Include RDBMS and graph databases, which do not predefine data organization, allowing for flexible data access.</li> </ul>"},{"location":"tech/big-data.html#4-schemalessness-in-nosql","title":"4. Schemalessness in NoSQL","text":"<p>While NoSQL databases do not require a fixed schema, there is often an implicit schema determined by the application interacting with the data, providing flexibility but demanding application-level data structure management.</p>"},{"location":"tech/big-data.html#5-polyglot-persistence","title":"5. Polyglot Persistence","text":"<p>Refers to the strategy of using multiple database technologies within the same application, choosing the optimal storage solution based on specific data and access requirements.</p>"},{"location":"tech/big-data.html#6-big-data-processing-techniques","title":"6. Big Data Processing Techniques","text":"<p>Different techniques are used to manage Big Data efficiently:</p> <ul> <li>OLTP (Online Transaction Processing): Used by RDBMS for fast transactions.</li> <li>OLAP (Online Analytical Processing): For multidimensional queries, often in data warehousing.</li> <li>RTAP (Real-Time Analytic Processing): Supports real-time Big Data processing with continuous data streaming and immediate querying.</li> </ul>"},{"location":"tech/big-data.html#7-case-study-facebooks-architecture-circa-2010","title":"7. Case Study: Facebook\u2019s Architecture (circa 2010)","text":"<p>Facebook exemplifies the scale challenges that led to the adoption of NoSQL and distributed systems:</p> <ul> <li>Cassandra: NoSQL storage with no single point of failure, used for inbox searches.</li> <li>Hadoop/Hive: Open-source MapReduce for handling large datasets, with Hive enabling SQL-like querying.</li> <li>Memcached: Memory caching to reduce database load, providing faster data retrieval.</li> <li>HBase: Columnar database for real-time processing, built on the Google BigTable model, used for messaging and communication services.</li> </ul>"},{"location":"tech/database.html","title":"Databases","text":""},{"location":"tech/database.html#database-modeling-happens-at-three-levels","title":"Database modeling happens at three levels:","text":"<ol> <li>Conceptual \u2013 Maps real-world objects and relationships at a high level.Eg is Er, UML, Uml 2.0</li> <li>Logical \u2013 Defines structures to store data, like tables or graphs.Example XML, Graph</li> <li>Physical \u2013 Implements these structures in a technical system. Example data files, index structure.</li> </ol>"},{"location":"tech/database.html#evolution-of-database-models","title":"Evolution of Database Models:","text":"<ul> <li>First Generation: Hierarchical and Network Models (tree and navigational structures for specific tasks).</li> <li>Second Generation: Relational Model (E.F. Codd's table-based structure, easy to use and mathematically sound).</li> <li>Third Generation: Post-Relational Models (Object-Relational, XML, NoSQL, and NewSQL databases, all tailored to handle modern and complex data structures, especially for Big Data).</li> </ul> <p>Relational databases are reliable but struggle with complex or large data sets, leading to the rise of NoSQL and NewSQL for high-performance, scalable applications.</p>"},{"location":"tech/effective-prompts.html","title":"Effective Prompt Documentation","text":""},{"location":"tech/effective-prompts.html#documentation-writing-effective-prompts","title":"Documentation: Writing Effective Prompts","text":""},{"location":"tech/effective-prompts.html#introduction","title":"Introduction","text":"<p>Creating effective prompts is essential for leveraging the capabilities of AI models and ensuring that the output aligns with your expectations. This guide will provide you with tips and best practices for crafting prompts that yield accurate, relevant, and creative responses from AI tools.</p>"},{"location":"tech/effective-prompts.html#1-understand-the-purpose-of-your-prompt","title":"1. Understand the Purpose of Your Prompt","text":"<p>Before writing a prompt, clarify what you want to achieve. Are you looking for a specific answer, generating creative content, or seeking detailed information? Understanding your goal helps in crafting a precise prompt that guides the AI effectively.</p> <ul> <li>Example: If you want the AI to generate a summary of a topic, specify that. If you're seeking creative ideas, frame your prompt accordingly.</li> </ul>"},{"location":"tech/effective-prompts.html#2-be-specific-and-clear","title":"2. Be Specific and Clear","text":"<p>Ambiguity can lead to unexpected or irrelevant results. Make your prompts as specific as possible. The more details you provide, the better the AI can understand and respond.</p> <ul> <li>Vague Prompt: \"Tell me about the world.\"</li> <li>Specific Prompt: \"Provide a summary of the major environmental issues currently affecting the world, including climate change, pollution, and deforestation.\"</li> </ul>"},{"location":"tech/effective-prompts.html#3-use-simple-and-clear-language","title":"3. Use Simple and Clear Language","text":"<p>Use straightforward language that avoids jargon or complex sentence structures. This ensures that the AI understands your request and provides a relevant response.</p> <ul> <li>Complex Prompt: \"Expound on the intricacies of the contemporary socio-political landscape.\"</li> <li>Simpler Prompt: \"Describe the main social and political issues in today's world.\"</li> </ul>"},{"location":"tech/effective-prompts.html#4-provide-context","title":"4. Provide Context","text":"<p>Giving context helps the AI generate responses that are relevant and accurate. Include background information or specify the scenario in which the response should be framed.</p> <ul> <li>Example: \"Imagine you are a historian in the year 2100. Describe how the internet influenced global society in the 21st century.\"</li> </ul>"},{"location":"tech/effective-prompts.html#5-ask-open-ended-questions-for-creative-output","title":"5. Ask Open-Ended Questions for Creative Output","text":"<p>If you want to explore ideas or generate creative content, ask open-ended questions. This encourages the AI to provide more expansive and imaginative responses.</p> <ul> <li>Example: \"What are some creative ways to promote environmental awareness in urban communities?\"</li> </ul>"},{"location":"tech/effective-prompts.html#6-set-constraints-when-needed","title":"6. Set Constraints When Needed","text":"<p>Constraints help guide the AI to stay within specific boundaries. This is useful when you need the output in a certain format, length, or style.</p> <ul> <li>Example: \"Write a short poem (4 lines) about the ocean.\"</li> </ul>"},{"location":"tech/effective-prompts.html#7-use-examples-to-guide-responses","title":"7. Use Examples to Guide Responses","text":"<p>Providing examples of the type of answer you expect can be very helpful. This sets a reference for the AI to mimic, ensuring the response meets your expectations.</p> <ul> <li>Example: \"Describe the plot of a movie in two sentences, like this: 'In Finding Nemo, a clownfish goes on an epic journey to rescue his son from a fish tank. Along the way, he encounters sharks, jellyfish, and turtles.'\"</li> </ul>"},{"location":"tech/effective-prompts.html#8-utilize-the-act-as-method","title":"8. Utilize the \"Act As\" Method","text":"<p>Directing the AI to respond as a specific character or role helps the AI adopt the perspective or tone you are looking for.</p> <ul> <li>Example: \"Act as a tech support specialist explaining how to reset a password to a non-technical user.\"</li> </ul>"},{"location":"tech/effective-prompts.html#9-iterate-and-refine","title":"9. Iterate and Refine","text":"<p>If the response isn't as expected, refine your prompt. Adjust the wording, add more details, or change the format to improve the outcome.</p> <ul> <li>Initial Prompt: \"What are the benefits of exercise?\"</li> <li>Refined Prompt: \"List five specific health benefits of regular cardiovascular exercise, including its impact on heart health and mental well-being.\"</li> </ul>"},{"location":"tech/effective-prompts.html#10-specify-the-output-format","title":"10. Specify the Output Format","text":"<p>Indicating the desired format can help the AI generate the response in the form you need, such as bullet points, a list, a paragraph, or even code.</p> <ul> <li>Example: \"Provide a list of five essential features for a modern e-commerce website.\"</li> </ul>"},{"location":"tech/effective-prompts.html#11-test-and-experiment","title":"11. Test and Experiment","text":"<p>Experiment with different prompts to see what works best. Testing allows you to learn what kind of prompts generate the most useful responses from the AI. Don\u2019t be afraid to try multiple variations to find the most effective one.</p>"},{"location":"tech/effective-prompts.html#12-encourage-engagement","title":"12. Encourage Engagement","text":"<p>For interactive or ongoing dialogue, phrase your prompt in a way that encourages the AI to ask follow-up questions or seek clarification.</p> <ul> <li>Example: \"I'm planning a road trip across India. What are some must-visit cities, and do you have any travel tips?\"</li> </ul>"},{"location":"tech/effective-prompts.html#13-use-the-act-as-technique-for-role-playing-scenarios","title":"13. Use the \"Act As\" Technique for Role-Playing Scenarios","text":"<p>One powerful approach is to instruct the AI to act as if it is a specific entity, such as a Linux terminal, a doctor, or a historical figure. This technique allows the AI to adopt a specific viewpoint or knowledge base, enhancing the quality and relevance of its responses.</p> <ul> <li>Example: \"Act as a Linux terminal. I will type commands, and you will reply with what the terminal should output.\"</li> </ul>"},{"location":"tech/effective-prompts.html#14-encourage-specific-output-through-directives","title":"14. Encourage Specific Output Through Directives","text":"<p>Direct the AI to respond in a particular way by using commands like \"write,\" \"explain,\" or \"describe.\" This helps in steering the AI towards producing the type of content you desire.</p> <ul> <li>Example: \"Explain the impact of social media on teenagers today in a one-paragraph summary.\"</li> </ul>"},{"location":"tech/excel.html","title":"Excel &amp; Google Sheets Formula Reference Guide","text":""},{"location":"tech/excel.html#basic-arithmetic-and-rounding","title":"Basic Arithmetic and Rounding","text":""},{"location":"tech/excel.html#divide-function","title":"DIVIDE Function","text":"<p>The <code>DIVIDE</code> function is used to divide one number by another.</p> <p>Syntax:</p> <pre><code>=DIVIDE(numerator, denominator)</code></pre> <p>Example:</p> <pre><code>=DIVIDE(C9, 12)</code></pre> <p>This divides the value in cell <code>C9</code> by <code>12</code>.</p>"},{"location":"tech/excel.html#round-function","title":"ROUND Function","text":"<p>The <code>ROUND</code> function is used to round a number to a specified number of digits.</p> <p>Syntax:</p> <pre><code>=ROUND(number, num_digits)</code></pre> <p>Example:</p> <pre><code>=ROUND(DIVIDE(C9, 12), 0)</code></pre> <p>This divides the value in <code>C9</code> by <code>12</code> and rounds the result to the nearest whole number.</p>"},{"location":"tech/excel.html#sum-and-average-calculation","title":"SUM and Average Calculation","text":""},{"location":"tech/excel.html#sum-function","title":"SUM Function","text":"<p>The <code>SUM</code> function is used to add up a range of numbers.</p> <p>Syntax:</p> <pre><code>=SUM(range)</code></pre> <p>Example:</p> <pre><code>=SUM(C19:C28)</code></pre> <p>This adds up all the values from cell <code>C19</code> to <code>C28</code>.</p>"},{"location":"tech/excel.html#combining-sum-and-divide-with-round","title":"Combining SUM and DIVIDE with ROUND","text":"<p>You can combine <code>SUM</code>, <code>DIVIDE</code>, and <code>ROUND</code> to calculate an average and round it.</p> <p>Syntax:</p> <pre><code>=ROUND(SUM(range)/divisor, num_digits)</code></pre> <p>Example:</p> <pre><code>=ROUND(SUM(C19:C28)/12, 0)</code></pre> <p>This sums the values from <code>C19</code> to <code>C28</code>, divides by <code>12</code>, and rounds the result to the nearest whole number.</p>"},{"location":"tech/excel.html#working-with-multiple-sheets","title":"Working with Multiple Sheets","text":""},{"location":"tech/excel.html#referencing-data-from-another-sheet","title":"Referencing Data from Another Sheet","text":"<p>To reference a cell from another sheet in the same workbook, use the sheet name followed by an exclamation mark.</p> <p>Syntax:</p> <pre><code>=SheetName!Cell</code></pre> <p>Example:</p> <pre><code>=January!A38</code></pre> <p>This references cell <code>A38</code> from the sheet named <code>January</code>.</p>"},{"location":"tech/excel.html#dynamic-sheet-references","title":"Dynamic Sheet References","text":"<p>If you want the sheet name to be dynamic (e.g., coming from another cell), you can use the <code>INDIRECT</code> function.</p> <p>Syntax:</p> <pre><code>=INDIRECT(\"'\" &amp; CellContainingSheetName &amp; \"'!CellReference\")</code></pre> <p>Example:</p> <pre><code>=INDIRECT(\"'\" &amp; B4 &amp; \"'!A38\")</code></pre> <p>This formula uses the sheet name in cell <code>B4</code> and references <code>A38</code> in that sheet.</p>"},{"location":"tech/excel.html#linking-data-between-google-sheets","title":"Linking Data Between Google Sheets","text":""},{"location":"tech/excel.html#importrange-function","title":"IMPORTRANGE Function","text":"<p>The <code>IMPORTRANGE</code> function is used to import data from one Google Sheet to another.</p> <p>Syntax:</p> <pre><code>=IMPORTRANGE(\"spreadsheet_url\", \"range_string\")</code></pre> <p>Example:</p> <pre><code>=IMPORTRANGE(\"1pCZ9dTPq0YfoT5oslhC0U_qsPLVF1Kc7ZiPC0TKkmlk\", \"2024!O19\")</code></pre> <p>This imports the value from cell <code>O19</code> in the <code>2024</code> sheet from another Google Sheet with the specified URL.</p>"},{"location":"tech/excel.html#using-importrange-with-dynamic-cell-references","title":"Using IMPORTRANGE with Dynamic Cell References","text":"<p>To make the sheet name or range dynamic, use the <code>IMPORTRANGE</code> function with the <code>INDIRECT</code> function.</p> <p>Syntax:</p> <pre><code>=IMPORTRANGE(\"spreadsheet_url\", INDIRECT(\"range_string\"))</code></pre> <p>Example:</p> <pre><code>=IMPORTRANGE(\"1pCZ9dTPq0YfoT5oslhC0U_qsPLVF1Kc7ZiPC0TKkmlk\", INDIRECT(\"'\" &amp; B4 &amp; \"'!O19\"))</code></pre> <p>This dynamically references the sheet and cell specified in <code>B4</code>.</p>"},{"location":"tech/github.html","title":"GitHub","text":""},{"location":"tech/github.html#creating-a-new-repository","title":"Creating a New Repository","text":"<p>To create a new repository on GitHub:</p> <ol> <li>Go to GitHub: Navigate to GitHub and log in to your account.</li> <li>Create a Repository: Click the \"+\" icon in the upper-right corner and select \"New repository.\"</li> <li>Repository Details: Enter a name for your repository, add an optional description, choose the visibility (public or private), and initialize with a README if desired.</li> <li>Create Repository: Click the \"Create repository\" button to finalize.</li> </ol>"},{"location":"tech/github.html#adding-a-repository-to-git","title":"Adding a Repository to Git","text":"<p>To add a local repository to GitHub:</p> <ol> <li>Initialize Git: In your local project directory, run:    <pre><code>git init</code></pre></li> <li>Add Remote: Link your local repository to GitHub:    <pre><code>git remote add origin &lt;repository-URL&gt;</code></pre></li> <li>Add Files: Stage your files:    <pre><code>git add .</code></pre></li> <li>Commit Changes: Commit your staged files:    <pre><code>git commit -m \"Initial commit\"</code></pre></li> <li>Push to GitHub: Push your changes to the remote repository:    <pre><code>git push -u origin master</code></pre></li> </ol>"},{"location":"tech/github.html#committing-changes","title":"Committing Changes","text":"<p>Committing Files:</p> <ol> <li>Stage Files: Add files to the staging area:    <pre><code>git add &lt;file&gt;</code></pre></li> <li>Commit Changes: Commit with a message:    <pre><code>git commit -m \"Your commit message\"</code></pre></li> </ol> <p>Best Practices for Commit Messages:</p> <ul> <li>Be Descriptive: Use clear, concise language to describe the changes.</li> <li>Use Imperative Mood: Write commit messages in imperative mood (e.g., \"Fix bug\" instead of \"Fixed bug\").</li> <li>Limit Length: Keep the subject line under 50 characters, and use the body for additional details if necessary.</li> </ul>"},{"location":"tech/github.html#pushing-and-pulling-changes","title":"Pushing and Pulling Changes","text":"<p>Push Changes:</p> <ol> <li>Push to Remote: Upload your local commits to the remote repository:    <pre><code>git push</code></pre></li> </ol> <p>Pull Changes:</p> <ol> <li>Pull from Remote: Fetch and merge changes from the remote repository:    <pre><code>git pull</code></pre></li> </ol>"},{"location":"tech/github.html#handling-merge-conflicts","title":"Handling Merge Conflicts","text":"<p>Merge conflicts occur when changes in different branches clash. To resolve:</p> <ol> <li>Pull Latest Changes: Ensure you have the latest changes from the remote branch:    <pre><code>git pull</code></pre></li> <li>Resolve Conflicts: Open the files with conflicts, manually resolve the issues, and save the file.</li> <li>Stage Resolved Files: Add the resolved files:    <pre><code>git add &lt;file&gt;</code></pre></li> <li>Commit Merge: Complete the merge by committing:    <pre><code>git commit</code></pre></li> </ol>"},{"location":"tech/github.html#github-pages","title":"GitHub Pages","text":"<p>GitHub Pages is a feature that allows you to host websites directly from a GitHub repository. It\u2019s commonly used for project documentation, personal blogs, and portfolio sites.</p> <p>Key Features:</p> <ul> <li>Static Site Hosting: Ideal for static websites.</li> <li>Jekyll Integration: Supports Jekyll for static site generation.</li> <li>Custom Domains: Allows the use of custom domains.</li> </ul> <p>Getting Started:</p> <ol> <li>Create a Repository: Make a new repository on GitHub.</li> <li>Add Your Site Files: Commit your HTML/CSS/JavaScript files to the repository.</li> <li>Enable GitHub Pages: Go to the repository settings, find the GitHub Pages section, and choose the branch to deploy.</li> </ol>"},{"location":"tech/github.html#github-actions","title":"GitHub Actions","text":"<p>GitHub Actions is a CI/CD and automation tool integrated into GitHub. It allows you to automate workflows directly in your GitHub repository.</p> <p>Key Features:</p> <ul> <li>Workflows: Define workflows using YAML files.</li> <li>Actions: Reusable units of code that perform specific tasks.</li> <li>Continuous Integration/Continuous Deployment: Automate testing and deployment processes.</li> </ul> <p>Getting Started:</p> <ol> <li>Create a Workflow File: Add a <code>.github/workflows</code> directory and create a YAML file.</li> <li>Define Triggers: Specify the events that trigger the workflow (e.g., push, pull request).</li> <li>Add Jobs and Steps: Define the jobs and steps to run within the workflow.</li> </ol> <p>Example Workflow:</p> <pre><code>name: CI\n\non: [push]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: \"14\"\n      - name: Install dependencies\n        run: npm install\n      - name: Run tests\n        run: npm test</code></pre>"},{"location":"tech/playwright.html","title":"Playwright","text":"<ul> <li>Title: Playwright Documentation</li> <li>Description: Documentation on Playwright learning and setup for testing.</li> <li>Owner: Kaushal Raj</li> <li>Authors: Kaushal Raj</li> <li>Categories: Testing</li> <li>Tags: Playwright, Testing, Automation</li> </ul>"},{"location":"tech/playwright.html#playwright-documentation","title":"Playwright Documentation","text":""},{"location":"tech/playwright.html#1-introduction","title":"1. Introduction","text":"<p>Playwright is a powerful testing tool for end-to-end testing across web applications, supporting multiple browsers and platforms. This guide provides examples and best practices for locating elements, interacting with the UI, and running tests.</p>"},{"location":"tech/playwright.html#2-locators-and-selectors","title":"2. Locators and Selectors","text":"<p>Playwright offers flexible locators to identify and interact with elements in a browser.</p>"},{"location":"tech/playwright.html#element-interactions","title":"Element Interactions","text":""},{"location":"tech/playwright.html#1-navigation-and-clicks","title":"1. Navigation and Clicks","text":"<ul> <li>Navigate to URL: <code>page.goto(\"http://localhost:3000/\")</code></li> <li>Click Element: <pre><code>page.click(\"locator\");\npage.click(\"id=loginId\"); // example</code></pre></li> </ul>"},{"location":"tech/playwright.html#2-filling-inputs","title":"2. Filling Inputs","text":"<ul> <li>Fill Input:</li> </ul> <pre><code>page.fill(\"locator\", \"value\");\npage.fill(\"input=[id='loginId']\", \"value\"); // example</code></pre> <ul> <li>Type in Input: <pre><code>page.type(\"locator\", \"value\");</code></pre></li> </ul>"},{"location":"tech/playwright.html#locator-variants","title":"Locator Variants","text":"<p>Playwright\u2019s <code>locator</code> API provides enhanced flexibility and precision:</p> <ul> <li>Links/Buttons:</li> </ul> <pre><code>page.click(\"locator\");\npage.locator(\"locator\").click();</code></pre> <ul> <li>Input Boxes: <pre><code>page.locator(\"locator\").fill(\"value\");\npage.locator(\"locator\").type(\"value\");</code></pre></li> </ul>"},{"location":"tech/playwright.html#3-built-in-locators","title":"3. Built-in Locators","text":"<p>Playwright has built-in locators that simplify accessibility and semantic element selection:</p> <ul> <li><code>page.getByRole()</code>: Locate by role attribute.</li> <li><code>page.getByText()</code>: Locate by text content.</li> <li><code>page.getByLabel()</code>: Locate by associated label\u2019s text.</li> <li><code>page.getByPlaceholder()</code>: Locate by placeholder attribute.</li> <li><code>page.getByAltText()</code>: Locate by alt attribute.</li> <li><code>page.getByTitle()</code>: Locate by title attribute.</li> <li><code>page.getByTestId()</code>: Locate by <code>data-testid</code> attribute.</li> </ul> <p>Tip: Use Selector Hub extension to extract precise element selectors.</p>"},{"location":"tech/playwright.html#4-running-tests","title":"4. Running Tests","text":""},{"location":"tech/playwright.html#run-commands","title":"Run Commands","text":"<ul> <li>Run a Specific File: <pre><code>npx playwright test file-path/filename --project chromium --headed</code></pre></li> </ul> <p>You can adjust the project to specify other browsers or environments.</p>"},{"location":"tech/playwright.html#5-additional-notes","title":"5. Additional Notes","text":"<ul> <li>Playwright Inspector: Use this tool to debug tests by visually inspecting elements.</li> <li>Handling Multiple Roles and Flows: Design your tests with reusable functions and page object models for consistency.</li> </ul> <p>npx playwright codegen -o .\\tests\\Admin\\non-event.spec.ts - command to execute the code generator   - npx playwright codegen - to create a file and record the test cases.   - npx playwright codegen -o filePath/filename -</p>"},{"location":"tech/post_deploy.html","title":"Post deploy","text":"<ul> <li>Title: Playwright Documentation</li> <li>Description: Documentation on Playwright learning and setup for testing.</li> <li>Owner: Kaushal Raj</li> <li>Authors: Kaushal Raj</li> <li>Categories: Testing</li> <li>Tags: Playwright, Testing, Automation</li> </ul>"},{"location":"tech/post_deploy.html#analytics","title":"Analytics","text":""},{"location":"tech/post_deploy.html#how-analytics-works","title":"How Analytics Works","text":"<ol> <li>Collcection - Google Tag Manager</li> <li>Store - Google Analytics</li> <li>Report - Looker Studio</li> </ol>"},{"location":"tech/post_deploy.html#google-tag-manager","title":"Google Tag Manager","text":""},{"location":"tech/post_deploy.html#hierarchy","title":"Hierarchy","text":"<ul> <li> <p>GTA is also called shell</p> </li> <li> <p>Account</p> </li> <li>Container<ul> <li>WorkSpace</li> </ul> </li> </ul>"},{"location":"tech/post_deploy.html#parts-of-gtm","title":"Parts Of GTM","text":"<ol> <li>Tags - What GTM will do</li> <li>Trigger - When GTM will do</li> <li>Variables - What GTM needs to do</li> <li> <p>Folder - Where GTM is organized</p> </li> <li> <p>What does GTM Collects</p> </li> <li> <p>View</p> </li> <li>Clicks</li> <li>Scroll</li> <li>Interaction</li> </ol>"},{"location":"tech/reference-links.html","title":"Learning and Reference links","text":"","tags":["Reference Links"]},{"location":"tech/reference-links.html#study-references","title":"Study References","text":"","tags":["Reference Links"]},{"location":"tech/reference-links.html#core-topics","title":"Core Topics","text":"<ol> <li>Lecture 01 - DB History</li> <li>Lecture 02 - Introduction to Big Data</li> <li>Lecture 03 - Technologies for Big Data</li> <li>Lecture 05 - MapReduce</li> <li>Lecture 06 - Spark</li> </ol>","tags":["Reference Links"]},{"location":"tech/reference-links.html#database-models-and-types","title":"Database Models and Types","text":"<ol> <li>Lecture 07 - Column-Family Stores</li> <li>MongoDB Architecture Guide</li> <li>Lecture 08 - Key-Value Stores</li> <li>Lecture 09 - Column-Oriented Stores</li> <li>Lecture 10 - Document Stores</li> <li>Lecture 11 - Graph Databases</li> <li>Lecture 12 - Multi-Model Databases</li> <li>Lecture 13 - Other Database Types</li> <li>Lecture 14 - Polystores</li> <li>Lecture 15 - Advanced Database Topics</li> </ol>","tags":["Reference Links"]},{"location":"tech/reference-links.html#additional-resources-on-column-oriented-databases","title":"Additional Resources on Column-Oriented Databases","text":"<ol> <li>Column-Oriented Database Systems - VLDB 2009 Tutorial</li> <li>Advanced Database Systems for Big Data</li> </ol>","tags":["Reference Links"]},{"location":"tech/reference-links.html#additional-course-resources","title":"Additional Course Resources","text":"<ol> <li>Svoboda Course Lectures (2015-1)</li> <li>Svoboda Course Lectures (171)</li> <li>Svoboda Course Lectures (191)</li> </ol>","tags":["Reference Links"]}]}