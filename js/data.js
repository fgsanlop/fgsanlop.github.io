export default {    
    experience: {
        education: [
            {
                title: 'Instituto Politécnico Nacional - UPIICSA',
                time: '2016 - 2022',
                description: 'University - Bachelor\'s degree in "IT".'
            },
            {
                title: 'Instituto Politécnico Nacional - CECyT 9 "Juan de Dios Bátiz"',
                time: '2012 - 2015',
                description: 'High School -Technical degree in "Programming".'
            }
        ],
        jobs: [
            {
                title: 'Java Developer @ Gentera',
                time: 'August 2021 - Present',
                description: 'Support, configuration and development of web services in Spring Framework to connect different APIs (SOAP/REST) inside the organization. <br>Mapping and documentation using Swagger/OpenAPI Specification and Postman. I also used Apigee to develop API proxies.'
            },
            {
                title: 'Internship @ IPN CIITA Veracruz',
                time: 'February - September 2021',
                description: 'Development of a web page with other students to support tourism in the city of Papantla, Veracruz.<br>Information was collected and processed to be displayed dynamically on the page.'
            }
        ]
    },
    work: [
        {
            ghLink: 'https://github.com/fgsanlop/carrito-de-compras-tecla',
            title: 'Inventory control / shopping cart "Tecla Videogames"',
            description: 'Database was created based on MercadoLibre API to get data about products such as titles, images, descriptions, stock, sold items and prices. Input data is validated on the server side and some unit tests were coded.',
            tools: ['Bootstrap', 'Node.js', 'Express', 'Mocha/Chai', 'SQL Server']
        },
        {
            ghLink: 'https://github.com/fgsanlop/dotnet-final-ligafut',
            title: '"Sunday League" Admin',
            description: 'The league administrator can register new teams including name and badge, each team has at least 5 players who generate personal statistics that influence team statistics. Also, this software helps the administrator to generate match fixtures.',
            tools: ['Bootstrap', 'ASP.NET Webforms', 'C#', 'SQL Server']
        },     
        {
            ghLink: 'https://github.com/fgsanlop/ticket-1-tecla',
            title: 'Project budgets calculator',
            description: 'Helps you to make budgets based on different variables, the great challenge in this project was to create an Excel-like grid with Javascript where rows and columns could be added and removed.',
            tools: ['Node.js', 'Express', 'SQL Server']
        },
        {
            ghLink: 'https://github.com/fgsanlop/ticket-2-tecla',
            title: '"Academy Social Network" backend',
            description: 'The purpose of this project is to connect students and teachers from a "coding" academy using a social network. Studentes can share basic information, they also can make friends through request and leave some feedback to them. Teachers can score the students according to established categories.',
            tools: ['Node.js', 'Express', 'SQL Server']
        },
        {
            ghLink: 'https://github.com/fgsanlop/tecla-challenge',
            title: 'Tecla challenge "Calculator"',
            description: 'This little project allows you to calculate vehicle rental fees according to vehicle type, city and hours of service. There are sections that display sorted data about this numbers.',
            tools: ['Bootstrap', 'JS', 'LocalStorage', 'GH-Pages']
        },
        {
            ghLink: 'https://github.com/fgsanlop/angular-mongo-portafolio',
            title: 'Portfolio',
            description: 'Simple CRUD about information of my projects.',
            tools: ['Angular', 'Node.js', 'Express', 'MongoDB']
        },
        {
            ghLink: 'https://github.com/fgsanlop/socketio-chat',
            title: 'Socket.io chat',
            description: 'Simple chat using this JS library.',
            tools: ['JS', 'Socket.io']
        },
        {
            ghLink: 'https://github.com/fgsanlop/sistema-inventarios',
            title: 'Inventory control / shopping cart "Clothing Store"',
            description: 'This system was developed for a clothing store with different functions.<br><br>Customers can order clothing by size and color, includes a shopping cart and purchase history.<br>The supervisor can make production orders and edit information about the clothes in sale, inputs, suppliers and authorize customer orders.<br>The manager can make purchase orders for supplies and store them in the locations available in stock.',
            tools: ['Bootstrap', 'PHP', 'MySQL']
        }
    ]
}
