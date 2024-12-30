// import { BulletModel, DataModel, HeaderModel, TextType, StringModel, BulletType } from "./model";

// const termsAndConditionsData = new DataModel(
//     "Terms and Conditions for Swasthi",
//     "10.10.2024",
//     [new StringModel(
//         "Welcome to Swasthi, a comprehensive global health application designed to empower individuals to take charge of their wellness through interactive tools and resources. By accessing or using the Swasthi app (\"App\"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the App.",
//         false,
//         TextType.p,
//         false,
//         undefined
//     )],
//     [
//         new HeaderModel("Definitions",
//             undefined,
//             TextType.h1,
//             true,
//             [
//                 new BulletModel("'App'", [
//                     new StringModel("refers to the Swasthi mobile application available on iOS and Android platforms.", false, TextType.p, false, undefined)
//                 ], undefined, undefined),
//                 new BulletModel("'User'", [
//                     new StringModel("refers to any individual accessing or using the App.", false, TextType.p, false, undefined)
//                 ], undefined, undefined),
//                 new BulletModel("'Company'", [
//                     new StringModel(", ", false, TextType.p, false, undefined),
//                     new StringModel("'We'", true, TextType.p, false, undefined),
//                     new StringModel(", ", false, TextType.p, false, undefined),
//                     new StringModel("'Us'", true, TextType.p, false, undefined),
//                     new StringModel(", and ", false, TextType.p, false, undefined),
//                     new StringModel("'Our'", true, TextType.p, false, undefined),
//                     new StringModel(" refer to the creators and operators of Swasthi.", false, TextType.p, false, undefined)
//                 ], undefined, undefined),
//                 new BulletModel("'Content'", [
//                     new StringModel("refers to all materials provided within the App, including but not limited to health calculators, quizzes, tips, text, graphics, logos, and other features.", false, TextType.p, false, undefined)
//                 ], undefined, undefined),
//                 new BulletModel("'Subscription'", [
//                     new StringModel("refers to the paid access provided to Users for enhanced features and functionalities.", false, TextType.p, false, undefined)
//                 ], undefined, undefined)
//             ],
//             undefined
//         ),
//         // Continue with other sections following the same pattern...
//         // I'll show a few more sections as examples
//         new HeaderModel("User Registration and Account",
//             undefined,
//             TextType.h1,
//             false,
//             undefined,
//             [
//                 new HeaderModel("Eligibility", undefined, TextType.h2, true, [
//                     new BulletModel(undefined, [
//                         new StringModel("The App is intended for users aged 12 years and above. However, it is recommended for users aged 13 years and above. By using the App, you confirm that you meet this age requirement.", false, TextType.p, false, undefined)
//                     ], undefined, undefined)
//                 ], undefined),
//                 new HeaderModel("Account Creation", undefined, TextType.h2, true, [
//                     new BulletModel(undefined, [
//                         new StringModel("To access certain features of the App, you must create an account by providing accurate and complete information, including your email (via Google or Apple sign-up), username, height, weight, age, and gender etc.", false, TextType.p, false, undefined),
//                         new StringModel("You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.", false, TextType.p, false, undefined),
//                     ], undefined, undefined)
//                 ], undefined),

//                 new HeaderModel("Account Types", undefined, TextType.h2, true, [
//                     new BulletModel("Basic Account", [
//                         new StringModel("Free access to general health calculators and features.", false, TextType.p, false, undefined),
//                     ], undefined, undefined),
//                     new BulletModel("Premium Account", [
//                         new StringModel("Paid access to enhanced features, such as interactive graphs, detailed progress tracking, and personalised health insights.", false, TextType.p, false, undefined),
//                     ], undefined, undefined),
//                 ], undefined),

//                 new HeaderModel("Restrictions on Use", undefined, TextType.h2, true, [
//                     new BulletModel(undefined, [
//                         new StringModel("Users must not share their account credentials with others or use the App in any unlawful or unauthorized manner, including violating our policies or any applicable laws.", false, TextType.p, false, undefined),
//                     ],undefined, undefined),
                    
//                 ], undefined),

//                 new HeaderModel("User Conduct and Responsibilities", undefined, TextType.h2, true, undefined, [
//                     new HeaderModel("Acceptable Use", undefined, 
//                         TextType.h1, true, [
//                             new BulletModel(undefined, [
//                                 new StringModel("Users must not share their account credentials with others or use the App in any unlawful or unauthorized manner, including violating our policies or any applicable laws.", false, TextType.p, false, undefined),
//                             ], undefined, [
//                                 new BulletModel(undefined, [
//                                     new StringModel("Engage in any activity that is harmful, abusive, or otherwise objectionable.", false, TextType.p, false, undefined),
//                                     new StringModel("Use the App for commercial purposes without explicit permission.", false, TextType.p, false, undefined),
//                                     new StringModel("Provide false information during registration or in your profile.", false, TextType.p, false, undefined),
//                                 ], undefined, undefined)
//                             ])
//                         ],
//                         undefined
//                     ),
//                     new HeaderModel("Prohibited Conduct", 
//                         undefined,
//                         TextType.h1,
//                         true,
//                         [
//                             new BulletModel("Users are prohibited from:", [
//                                 new StringModel("Attempting to gain unauthorized access to any part of the App or its systems.", false, TextType.p, false, undefined),
//                                 new StringModel("Using the App to distribute malware or other harmful software.", false, TextType.p, false, undefined),
//                                 new StringModel("Engaging in data mining, scraping, or any other activity aimed at harvesting data.", false, TextType.p, false, undefined),
//                             ], undefined, undefined)
//                         ],
//                         undefined
//                     ),

//                 ]),
//                 new HeaderModel("Content and Intellectual Property Rights", undefined, 
//                     TextType.h2, true, undefined, [
//                         new HeaderModel("Ownership of Content",
//                             undefined,
//                             TextType.h3,
//                             true,
//                             [
//                                 new BulletModel(undefined, [
//                                     new StringModel("All content provided within the App, including but not limited to health calculators, quizzes, tips, and other materials, is owned by Swasthi or licensed from third parties. This content is protected by intellectual property laws.", false, TextType.p, false, undefined),
//                                 ], undefined, undefined)
//                             ],
//                             undefined
//                         ),
//                         new HeaderModel("Usage Rights",
//                             undefined,
//                             TextType.h3,
//                             true,
//                             [
//                                 new BulletModel(undefined, [
//                                     new StringModel("Users may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from the App without our prior written consent.", false, TextType.p, false, undefined),
//                                 ], undefined, undefined)
//                             ],
//                             undefined
//                         ),

//                         new HeaderModel("Subscriptions and Payments",
//                             undefined,
//                             TextType.h1,
//                             true,
//                            undefined,
//                             [
//                                 new HeaderModel("Subscription Terms", undefined, TextType.h2, true, [
//                                     new BulletModel(undefined, [
//                                         new StringModel("Swasthi offers monthly and annual subscription plans with a 15-day free trial for new users. Subscriptions renew automatically unless cancelled before the end of the current subscription period.", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ], undefined),
//                                 new HeaderModel("Payment Methods", undefined, TextType.h2, true, [
//                                     new BulletModel(undefined, [
//                                         new StringModel("Payments will be charged to your account at the confirmation of purchase. Recurring payments are processed automatically unless cancelled by the user.", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ], undefined),

//                                 new HeaderModel("Refund Policy", undefined, TextType.h2, true, [
//                                     new BulletModel(undefined, [
//                                         new StringModel("All payments are non-refundable, and no refunds will be issued for partial use of the subscription or accidental purchases.", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ], undefined),


//                             ]
//                         ),

//                         new HeaderModel("Health and Safety Disclaimers", undefined, TextType.h1, true, undefined, [
//                             new HeaderModel("General Health Disclaimer", undefined, TextType.h2, true, [
//                                 new BulletModel(undefined, [
//                                     new StringModel("The Swasthi app provides health calculators and wellness information for general informational purposes only. The App is not intended to diagnose, treat, cure, or prevent any disease or health condition.", false, TextType.p, false, undefined),
                                   
//                                 ], undefined, undefined),
//                                 new BulletModel(undefined, [
                                   
//                                     new StringModel("You should consult with a healthcare professional before making any health-related decisions or changes based on information obtained from the App.", false, TextType.p, false, undefined),
//                                 ], undefined, undefined),
//                             ], undefined),


//                             new HeaderModel("Limitation of Liability", undefined, TextType.h2, true, [
//                                 new BulletModel(undefined, [
//                                     new StringModel("To the fullest extent permitted by law, Swasthi, its directors, employees, or agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:", false, TextType.p, false, undefined),
                                   
//                                 ], undefined, [
//                                     new BulletModel(undefined, 
//                                         [
//                                             new StringModel("The use or inability to use the App.", false, TextType.p, false, undefined),
//                                             new StringModel("Errors, mistakes, or inaccuracies of content.", false, TextType.p, false, undefined),
//                                             new StringModel("Any unauthorized access or use of our secure servers and/or any and all personal information stored therein.", false, TextType.p, false, undefined),
//                                         ],
//                                         BulletType.square,
//                                         undefined
//                                     )
//                                 ])
//                             ], undefined),




//                         ]),
//                         new HeaderModel("Data Collection and Use",
//                             undefined,
//                             TextType.h1,
//                             true,
//                             undefined,
//                             [
//                                 new HeaderModel("Personal Data Collection",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined,
//                                             [
//                                                 new StringModel("The App collects personal data such as email, username, height, weight, age, and gender. This data is used to provide personalized health insights and for enhancing the user experience.", false, TextType.p, false, undefined),

//                                             ],
//                                             undefined,
//                                             undefined
//                                         )
//                                     ],
//                                     undefined
//                                 ),

//                                 new HeaderModel("Data Usage",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined,
//                                             [
//                                                 new StringModel("We use the collected data to operate, maintain, and improve the App. We do not share data with any third parties or any other local or international institutions except required in compliance with legal obligations as per the prevailing governing laws.", false, TextType.p, false, undefined),

//                                             ],
//                                             undefined,
//                                             undefined
//                                         )
//                                     ],
//                                     undefined
//                                 ),

//                                 new HeaderModel("User Rights",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined,
//                                             [
//                                                 new StringModel("Users have the right to access, correct, and delete their data. For more details, refer to our Privacy Policy and Data Deletion Policy.", false, TextType.p, false, undefined),

//                                             ],
//                                             undefined,
//                                             undefined
//                                         )
//                                     ],
//                                     undefined
//                                 ),
//                             ]
//                         ),

//                         new HeaderModel("Third-Party Services",
//                             undefined,
//                             TextType.h1,
//                             true,
//                             undefined,
//                             [
//                                 new HeaderModel("Integration with Third Parties",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined,
//                                             [
//                                                 new StringModel("The App integrates third-party services such as payment gateways and social media platforms. Swasthi is not responsible for any issues arising from the use of these third-party services.", false, TextType.p, false, undefined),
//                                             ],
//                                             undefined,
//                                             undefined
//                                         )
//                                     ],
//                                     undefined
//                                 ),

//                                 new HeaderModel("Liability for Third-Party Services",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined,
//                                             [
//                                                 new StringModel("We do not endorse, warrant, or guarantee any third-party services or content, and you use them at your own risk.", false, TextType.p, false, undefined),
//                                             ],
//                                             undefined,
//                                             undefined
//                                         )
//                                     ],
//                                     undefined
//                                 ),

                                
//                             ]
//                         ),

//                         new HeaderModel("Modifications and Updates",
//                             undefined,
//                             TextType.h1,
//                             true,
//                            undefined,
//                             [
//                                 new HeaderModel("Changes to the Terms",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined, [
//                                             new StringModel("Swasthi reserves the right to modify or update these Terms and Conditions at any time. Any changes will be communicated through in-app notifications. Continued use of the App after such changes will constitute acceptance of the new terms.", false, TextType.p, false, undefined),
//                                         ], undefined, undefined)
//                                     ],
//                                     undefined
//                                 ),
//                             ]
//                         ),

//                         new HeaderModel("Governing Law and Dispute Resolution",
//                             undefined,
//                             TextType.h1,
//                             true,
//                            undefined,
//                             [
//                                 new HeaderModel("Applicable Law",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined, [
//                                             new StringModel("These Terms shall be governed by and construed in accordance with the laws of India and any applicable international laws.", false, TextType.p, false, undefined),
//                                         ], undefined, undefined)
//                                     ],
//                                     undefined
//                                 ),


//                                 new HeaderModel("Dispute Resolution",
//                                     undefined,
//                                     TextType.h2,
//                                     true,
//                                     [
//                                         new BulletModel(undefined, [
//                                             new StringModel("Any disputes arising under or regarding these Terms shall be resolved through arbitration in India or in a competent court of jurisdiction, subject to the provisions of Indian law.", false, TextType.p, false, undefined),
//                                         ], undefined, undefined)
//                                     ],
//                                     undefined
//                                 ),
//                             ]
//                         ),

                       


//                     ]),
//                     new HeaderModel("Termination",
//                         undefined,
//                         TextType.h1,
//                         true,
//                        undefined,
//                         [
//                             new HeaderModel("Termination Rights",
//                                 undefined,
//                                 TextType.h2,
//                                 true,
//                                 [
//                                     new BulletModel(undefined, [
//                                         new StringModel("Swasthi reserves the right to terminate or suspend your access to the App without prior notice if you violate these Terms or engage in conduct that we deem harmful or inappropriate.", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ],
//                                 undefined
//                             ),


//                             new HeaderModel("User Obligations upon Termination",
//                                 undefined,
//                                 TextType.h2,
//                                 true,
//                                 [
//                                     new BulletModel(undefined, [
//                                         new StringModel("Upon termination, you must cease all use of the App, delete any copies of the App from your devices, and comply with any legal obligations.", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ],
//                                 undefined
//                             ),
//                         ]
//                     ),
//                     new HeaderModel("Contact Information",
//                         undefined,
//                         TextType.h1,
//                         true,
//                        undefined,
//                         [
//                             new HeaderModel("Contact Us",
//                                 undefined,
//                                 TextType.h2,
//                                 true,
//                                 [
//                                     new BulletModel(undefined, [
//                                         new StringModel("If you have any questions, concerns, or feedback regarding these Terms, please contact us at help-support@fitnearn.com", false, TextType.p, false, undefined),
//                                     ], undefined, undefined)
//                                 ],
//                                 undefined
//                             ),


                           
//                         ]
//                     ),
                
//             ]
//         ),
//         // Add remaining sections...
//     ]
// );

// export { termsAndConditionsData }; 