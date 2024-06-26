// ### პროექტი 28 - File Extensions - ფაილის ტიპები
// ფაილების უმეტესობას აქვს file extensions - სუფიქსები, რომელიც სახელწოდებაში წერტილის (.) შემდეგ წერია.
// მაგალითად, ფაილის სახელები GIF-ებისთვის მთავრდება .gif-ით, ხოლო JPEG-ების - .jpg ან .jpeg-ით.

// ვებ ბრაუზერები, თავის მხრივ, ეყრდნობიან მედიის ტიპებს, რომელიც ადრე ცნობილი იყო, როგორც MIME ტიპები
// - ამით დგინდება, როგორ უნდა იყოს ნაჩვენები ფაილები, რომლებიც ინტერნეტშია. როდესაც ვებ სერვერიდან ფაილს
// ტვირთავთ, ეს სერვერი ე.წ. HTTP header-ს თავად ფაილთან ერთად გზავნის, რომელიც ფაილის მედიის ტიპზე
// მიუთითებს. მაგალითად, მედიის ტიპი GIF-ისთვის არის image/gif, ხოლო მედიის ტიპი JPEG-ისთვის არის image/jpeg.
// ფაილის მედიის ტიპის დასადგენად, ვებ სერვერი, როგორც წესი, ფაილის გაფართოებას აკვირდება.

// იხილეთ developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types ფაილის ტიპები სიისთვის.

// შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს ფაილის სახელ0ს და შემდეგ ბეჭდავს, იმ შემთხვევაში,
// თუ ფაილის სახელი ამ რომელიმე სუფისქით მთავრდება:

// * .gif
// * .jpg
// * .jpeg
// * .png
// * .pdf
// * .txt
// * .zip

// თუ ფაილის სახელი მთავრდება სხვა სუფიქსით ან საერთოდ არ აქვს სუფიქსი, დაბეჭდეთ application/octet-stream.

// Example Output
// ```shell
// < File name: Cat.gif
// < image/gif
// < File name: Cat.jpg
// < image/jpeg
// < File name: Cat
// < application/octet-stream
// ```

// * პროგრამისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.
// const fileName = prompt('enter image name')
// if(fileName.endsWith('.gif') ){
//     console.log('image/gif')
// }else if(fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') ){
//     console.log('image/jpg')
// }else if(fileName.endsWith('.png') ){
//     console.log('image/png')
// }else if(fileName.endsWith('.pdf')){
//     console.log('image/pdf')
// }else if(fileName.endsWith('.txt')){
//     console.log('image/txt')
// }else if(fileName.endsWith('.zip')){
//     console.log('image/zip')
// }
 
// ### პროექტი 29 - Math Interpreter - მათემატიკური ინტერპრეტატორი
// შექმენით პროგრამა, რომელიც მომხმარებლისგან იღებსარითმეტიკულ გამოთვლას, რომელსაც შემდეგ ახორციელებს და 
//შედეგს ათწილადის სახით ბეჭდავს. დაუშვით, რომ მომხმარებლის input დაფორმატებული იქნება, როგორც x y z,
// თითო გამოტოვებით (space) x-სა და y-ს შორის, ისევე, როგორც y-სა და z-ს შორის. ამ გამოთვლაში:

// * x არის მთელი რიცხვი
// * y არის +, -, *, ან /
// * z არის მთელი რიცხვი

// მაგალითად, თუ input-ია 1 + 1, თქვენი პროგრამის output უნდა იყოს 2.0. დაუშვით, რომ თუ y არის /, მაშინ z არ იქნება 0.

// Example Output
// ```shell
// < Expression: 1 + 1
// < 2.0
// < Expression: 4/3
// < 1.3
// < Expression: 100 - 1
// < 99.0
// ```

// * პროგრამისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.
// let x = Number(prompt('enter the number'))
// let y = prompt('enter the action')
// let z = Number(prompt('enter the second number'))
// if(y === '+'){
//     console.log((x + z).toFixed(1))
// }else if(y === '-'){
//     console.log((x - z).toFixed(1))
// }else if(y === '*'){
//     console.log((x * z).toFixed(1))
// }else if(y === '/'){
//     console.log((x / z).toFixed(1))
// }else{
//     console.log('take valid symbol')
// }
// ### პროექტი 30 - Meal Time - კვების დრო
// დავუშვათ, იმყოფებით ქვეყანაში, სადაც ჩვეულებრივ, საუზმეს 7:00-დან 8:00 საათამდე მიირთმევენ,
// ლანჩს - 12:00-დან 13:00 საათამდე, ხოლო ვახშამს - 18:00-დან 19:00 საათამდე. იქნებ კარგი იყოს ისეთი 
//პროგრამის ქონა, რომელიც გეტყვით, როდის რა ჭამოთ?

// შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს დროის შეყვანას და დაუბეჭდავს, საუზმის დროა, ლანჩის თუ - ვახშმის.
// თუ კვების დრო არაა, output საერთოდ არაფერი იქნება. ვივარაუდოთ, რომ მომხმარებლის input-ის ფორმატირება მოხდება 
//24 საათში, როგორც: #:## ან ##:##. ასევე, დაუშვით, რომ თითოეული კვების ინტერვალი ითვლება, ანუ, იქნება ეს 
//7:00, 7:01, 7:59, თუ 8:00, ან 7:00-სა და 8:00 საათს შორის ნებისმიერ დროს, თითოეულ შემთხვევაში საუზმის დროა.

// შექმენით თქვენი პროგრამა ქვემოთ მოცემულის მიხედვით, სადაც კონვერტირება არის ფუნქცია (რომელიც შეიძლება 
//გამოიძახოს main-ით), რომელიც გარდაქმნის დროს, str 24-საათიან ფორმატში, საათების შესაბამის რაოდენობაზე, 
//როგორც float. მაგალითად, „7:30“ მსგავსი დროის გათვალისწინებით (ანუ 7 საათი და 30 წუთი), კონვერტაცია
// უნდა დააბრუნოს 7.5 (ანუ 7.5 საათი).

// პროგრამაში შექმენით ფუნქცია სახელწოდებით convert, რომელიც დროის დაკონვერტირებაზე იზრუნებს - 
//24-საათიანი ფორმატის სტრიქონს (string) გადაიყვანს შესაბამის საათობრივ რიცხვში, ათწილადის გამოყენებით. 
//მაგალითად, "7:30" - 7 საათი და 30 წუთი, კონვერტაციის დროს 7.5 უნდა გახდეს.

// Example Output
// ```shell
// < What time is it? 7:00
// < Breakfast time
// < What time is it? 8:01
// < What time is it? 18:01
// < Dinner time
// < What time is it? 18:59
// < Dinner time
// ```

// ### პროექტი 31 Adding Numbers
// Write a program that prompts the user for five numbers and
// computes the total of the numbers.
// Example Output
// ```shell
// Enter a number: 1
// Enter a number: 2
// Enter a number: 3
// Enter a number: 4
// Enter a number: 5
// The total is 15.
// ```

// * he prompting must use repetition, such as a counted
// loop, not three separate prompts.
// * Create a flowchart before writing the program.
// let total = 0
// for(let i = 1;i <= 5;i++){
//     const num = Number(prompt(`enter the number ${1}`))
//     total += num
// }
// console.log(total)

// ### პროექტი 32 - Tax Calculator - გადასახადის კალკულატორი
// მარტივი პრობლემების გადასაჭრელად ყოველთვის ჩახლართული საკონტროლო სტრუქტურა არაა საჭირო. 
//ზოგჯერ პროგრამა ერთ შემთხვევაში დამატებით ნაბიჯს მოითხოვს, მაგრამ ყველა სხვა შემთხვევაში სხვა არაფერია
// გასაკეთებელი. დაწერეთ მარტივი პროგრამა შეკვეთის ოდენობისთვის დამატებითი გადასახადის (tax) გამოსათვლელად.
// პროგრამამ უნდა მოითხოვოს შეკვეთის ოდენობა და შტატი. თუ შტატი არის „WI“, მაშინ შეკვეთას უნდა დაერიცხოს 5.5% 
//გადასახადი. პროგრამამ უნდა დაბეჭდოს ქვეჯამი, გადასახადი და ჯამური გადასახდელი თანხა ვისკონსინის მცხოვრებლებისთვის,
// ხოლო სხვებისთვის - მხოლოდ ჯამური თანხა.

// Example Output
// ```shell
// < What is the order amount? 10
// < What is the state? WI
// < The subtotal is $10.00.
// < The tax is $0.55.
// < The total is $10.55.

// < What is the order amount? 10
// < What is the state? MN
// < The total is $10.00
// ```
// const amount = Number(prompt('enter the amount'))
// const state = prompt('enter the state')
// let tax = 0
// if(state === 'WI'){
//     tax = 10 * 5.5 /100
// }else {
//     tax = 0
// }
// console.log(`subtotal is ${amount}, tax is${tax} the total is ${amount + tax} `)


// ### პროექტი 33 - Password Validation - პაროლის ვალიდაცია
// პაროლის ვალიდაცია ხდება მომხმარებლის მიერ მოწოდებული მნიშვნელობის შედარებით შენახულ მნიშვნელობასთან.
// პაროლი ან სწორია, ან არა. შექმენით მარტივი პროგრამა, რომელიც პაროლის ვალიდაციას აკეთებს. პროგრამამ უნდა 
//მოითხოვოს მომხმარებლის სახელი და პაროლი, უნდა შეადაროს მომხმარებლის მიერ ჩაწერილი პაროლი ცნობილ პაროლს. 
//თუ ეს ორი ერთმანეთს ემთხვევა, პროგრამამ უნდა აჩვენოს "Welcome!",  თუ არ ემთხვევა, უნდა გამოჩნდეს „I don't know you“.

// Example Output
// ```shell
// < What is the password? 12345
// < I don't know you.

// < What is the password? abc$123
// < Welcome!
// ```
// let name = prompt('enter the name')
// let password = prompt('enter the password')
// let realPassword = 123
// if(Number(password) === realPassword){
//     console.log(`welcome ${name}`)
// }else{
//     console.log('invalid password')
// }
// ### პროექტი 34 - Legal Driving Age - მართვის კანონიერი ასაკი
// თქვენ შეგიძლიათ შეამოწმოთ, თანაბარია თუ არა ორი რიცხვი, მაგრამ შეიძლება დაგჭირდეთ ასევე იმის გატესტვა,
// როგორ დარდება input-ის რიცხვი ცნობილ მნიშვნელობას, ხოლო ამის მიხედვით აჩვენოთ შეტყობინება, მოცემული რიცხვი 
//მეტისმეტად დაბალია თუ - მაღალი. დაწერეთ პროგრამა, რომელიც კითხულობს მომხმარებელს ასაკს და შეადარეთ ის 
//კანონიერად მართვის ასაკს - 16-ს. თუ მომხმარებელი არის 16 წლის ან მეტის, მაშინ პროგრამაში უნდა გამოჩნდეს 
//„You are old enough to legally drive.“. თუ მომხმარებელი 16 წელზე ნაკლები ასაკისაა, პროგრამამ უნდა აჩვენოს: 
//„You are not old enough to legally drive.“

// Example Output
// ```shell
// < What is your age? 15
// < You are not old enough to legally drive.

// < What is your age? 35
// < You are old enough to legally drive.
// ```
// let age = Number(prompt('enter age'))
// let legalAge = 16
// if(Number(age) === legalAge ){
//     console.log('You are old enough to legally drive.')
// }else{
//     console.log('You are not old enough to legally drive.')
// }