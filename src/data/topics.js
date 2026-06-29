export const topics = [
	{
		path: "components",
		title: "Components",
		content: [
			{
				text: "Приложения React состоят из компонентов. Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз. Компонент может быть маленьким, как кнопка, или большим, как целая страница.",
			},
			{
				text: "Компоненты — это независимые и многократно используемые фрагменты кода, функции. Они служат той же цели, что и функции JavaScript, но работают изолированно и возвращают JSX.",
			},
			{
				title: "Функциональные и классовые компоненты",
			},
			{
				text: "Компонент бывает:",
			},
			{
				list: ["Функциональный", "Классовый"],
			},
			{
				text: "Проще всего объявить React-компонент как функцию:",
			},
			{
				code: "function Welcome(props) {\n    return <h1> Привет, {props.name} </h1>;\n}",
			},
			{
				text: "Эта функция — компонент, она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Такие компоненты называются «функциональными», так как они буквально являются функциями.",
			},
			{
				text: "Компоненты можно определять как классы ES6:",
			},
			{
				code: "class Welcome extends React.Component {\n    render() {\n        return <h1> Привет, {this.props.name} </h1>;\n    }\n}",
			},
			{
				text: "С точки зрения React, эти два компонента эквивалентны.",
			},
			{
				text: "Компонент класса должен включать extends React.Component оператор. Этот оператор создает наследование для React.Component и предоставляет вашему компоненту доступ к функциям React.Component.",
			},
			{
				title: "Композиция компонентов",
			},
			{
				text: "Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения. Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой компоненты в React-приложениях.",
			},
			{
				text: "Например, компонент App может отрендерить компонент Welcome несколько раз:",
			},
			{
				code: 'function Welcome(props) {\nreturn <h1>Привет, {props.name}</h1>;\n}\n  \nfunction App() {\n    return (\n        <div>\n            <Welcome name= "Алиса" />\n            <Welcome name= "Базилио" />\n            <Welcome name= "Буратино" />\n        </div>\n    );\n}',
			},
			{
				title: "Рендер компонентов",
			},
			{
				code: "function Welcome(props) {\n    return <h1>Привет, {props.name}</h1>;\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nconst element = <Welcome name=\"Алиса\" />;\nroot.render(element);",
			},
			{
				list: [
					'Мы вызываем root.render() c React-элементом <Welcome name="Алиса" />.',
					"React вызывает наш компонент Welcome с пропсами {name: 'Алиса'}.",
					"Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата.",
					"React DOM делает минимальные изменения в DOM, чтобы получилось <h1>Привет, Алиса</h1>.",
				],
			},
			{
				text: "Всегда называйте компоненты с заглавной буквы. Если компонент начинается с маленькой буквы, React принимает его за DOM-тег.",
			},
			{
				title: "Извлечение компонентов",
			},
			{
				text: "В больших приложениях очень полезно иметь палитру компонентов, которые можно многократно использовать. Правило извлечения компонента: Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar) или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести в независимый компонент.",
			},
		],
	},
	{
		path: "props",
		title: "Props",
		content: [
			{
				text: "Компоненты React используют props для связи друг с другом. Каждый родительский компонент может передавать некоторую информацию своим дочерним компонентам, предоставляя им реквизиты (пропсы).",
			},
			{
				text: "Props - это объект. Получить его свойства можно также, как и при работе с обычным объектом:",
			},
			{
				text: "Компонент никогда не должен что-то записывать в свои пропсы, пропсы можно только читать!",
			},
			{
				code: "// функциональный компонент\nfunction MyComponent(props){\n    return (<div>{props.message}</div>)\n}\n\n// классовый компонент\nclass MyComponent extends React.Component{\n    constructor(props){\n        super(props)\n    }\n    render(){\n        return (<div>{this.props.message}</div>)\n    }\n}\n\n// используя дектруктуризацию \nfunction MyComponent({message}){\n    return (<div>{message}</div>)\n}\n",
			},
			{
				text: "Если вы хотите присвоить пропсу значение по умолчанию, чтобы вернуться к нему, когда значение не указано, вы можете сделать это с помощью деструктуризации, поставив = и значение по умолчанию сразу после параметра:",
			},
			{
				code: "function Avatar({ person, size = 100 }) {\n    // ...\n}",
			},
			{
				text: "Теперь, если компонент рендерится без size реквизита, size будет установлено значение 100. Значение по умолчанию используется только в том случае, если size реквизит отсутствует или если вы передаете size={undefined}. Но если вы передадите size={null}или size={0}, значение по умолчанию не будет использоваться.",
			},
			{
				text: "Если не передавать значение в пропс, то по умолчанию оно будет true. Эти два JSX выражения эквивалентны:",
			},
			{
				code: "<MyTextBox autocomplete />\n<MyTextBox autocomplete={true} />",
			},
			{
				text: "В JSX-выражениях содержимое, которое расположено между открывающими и закрывающими тегами, передаётся с помощью специального пропса: props.children.",
			},
			{
				text: "Если поместить строку между открывающим и закрывающим тегом, то props.children будет равно этой строке. Это полезно при создании встроенных HTML-элементов. HTML не экранируется, поэтому JSX можно писать так же, как HTML, к примеру:",
			},
			{
				code: "<MyComponent>Привет, мир!</MyComponent>\n<div>Это одновременно и валидный HTML и JSX.</div>",
			},
			{
				text: "JSX удаляет пустые строки и пробелы в начале и конце строки. Новые строки, примыкающие к тегу будут удалены. Новые строки между строковых литералов сжимаются в один пробел",
			},
			{
				text: "Чтобы отобразить вложенные компоненты, можно указать несколько JSX-элементов в качестве дочерних.",
			},
			{
				code: "<MyContainer>\n    <MyFirstComponent />\n    <MySecondComponent />\n</MyContainer>",
			},
			{
				text: "Можно смешивать различные типы потомков: использовать строковый литерал вместе с JSX-элементами (1). Также React-компонент может возвращать массив (2) элементов:",
			},
			{
				code: '//(1)\n<div>\n    Ниже представлен список:\n    <ul>\n        <li>Элемент 1</li>\n        <li>Элемент 2</li>\n    </ul>\n</div>\n\n//(2)\nrender() {\n    // Не нужно оборачивать список элементов в дополнительный элемент!\n    return [\n      <li key="A">Первый элемент</li>,\n      <li key="B">Второй элемент</li>,\n      <li key="C">Третий элемент</li>,\n    ];\n}',
			},
			{
				text: 'Можно передать любое JavaScript-выражение как дочерний компонент, обернув его в "{ }". Часто это бывает полезно при рендере списка JSX-выражений произвольной длины. Например, эта запись рендерит HTML-список:',
			},
			{
				code: "function Item(props) {\n    return <li>{props.message}</li>;\n}\n\nfunction TodoList() {\n    const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Паше про ревью'];\n    return (\n        <ul>\n            {todos.map((message) => <Item key={message} message={message} />)}\n        </ul>\n    );\n}",
			},
			{
				text: "Дочерние компоненты, передаваемые пользовательскому компоненту, могут быть чем угодно с тем условием, что компонент преобразует их во что-то, что React сможет понять и отрендерить.",
			},
			{
				text: "Пример передачи функции в качестве дочернего компонента:",
			},
			{
				code: "// Вызывает колбэк numTimes раз для создания повторяющего компонента\nfunction Repeat(props) {\n    let items = [];\n    for (let i = 0; i < props.numTimes; i++) {\n    items.push(props.children(i));\n    }\n    return <div>{items}</div>;\n}\n\nfunction ListOfTenThings() {\n    return (\n    <Repeat numTimes={10}>\n        {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}\n    </Repeat>\n    );\n}",
			},
			{
				text: "Значения false, null, undefined и true — валидные дочерние компоненты. Просто они не рендерятся. Этот подход может быть полезным для рендера по условию. Вот пример, где JSX рендерит <Header />, если showHeader равняется true:",
			},
			{
				code: "<div>\n    {showHeader && <Header />}\n    <Content />\n</div>",
			},
			{
				text: "Есть один нюанс в том, что React будет рендерить «ложные» (falsy) значения, такие как число 0.  0 будет отображён, если массив props.messages пуст (1). Чтобы исправить это, убедитесь что выражение перед оператором && всегда является boolean (2). И наоборот, если вы хотите, чтобы такие значения как false, true, null или undefined отрисовались, то сначала вы должны преобразовать их в строку (3):",
			},
			{
				code: "// (1)\n<div>{props.messages.length && <MessageList messages={props.messages} />}</div>\n// (2)\n<div>{props.messages.length > 0 && <MessageList messages={props.messages} />} </div>\n// (3)\n<div>Моя переменная JavaScript - {String(myVariable)}.</div>",
			},
		],
	},
	{
		path: "state",
		title: "State",
		content: [
			{
				text: "React предоставляет декларативный способ управления пользовательским интерфейсом. Вместо непосредственного управления отдельными частями пользовательского интерфейса вы описываете различные состояния (стейты, state), в которых может находиться ваш компонент, и переключаетесь между ними в ответ на действия пользователя.",
			},
			{
				text: "Состояния, в отличии от пропсов, можно изменять. При изменении состояния изменения произойдут во всех местах, где это состояние используется. Технически это достигается путем перендерования всего компонента при изменении какого-либо состояния.",
			},
			{
				text: "Состояния можно использвать как в классовых, так и в функциональных компонентах. Для работы с состоянием в классовом компоненте используется объекст state. В функциональных же компонентах для управления состоянием применяется другая архитектура, основанная на хуках.",
			},
			{
				text: "Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Если props представляет входные данные, которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью зависят от компонента.",
			},
			{
				text: "Значения из state должны использоваться при рендеринге. Если какой-то объект не используется в рендерниге компонента, то нет смысла сохранять его в state.",
			},
			{
				title: "Объявление состояния",
			},
			{
				text: "Стейт устанавливается в конструкторе класса, либо как свойство класса:",
			},
			{
				code: 'class Hello extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {welcome: "Добро пожаловать на сайт!"};\n    }\n    render() {\n        return <h1>{this.state.welcome}</h1>;\n    }\n}\n\nReactDOM.createRoot(\n    document.getElementById("app")\n)\n.render(\n    <Hello />\n);\n\n//или \n\nclass Hello extends React.Component {\n    state = {welcome: "Добро пожаловать на сайт!"}\n    render() {\n        return <h1>{this.state.welcome}</h1>;\n    }\n}\n//...',
			},
			{
				text: "Для функциональных компонентов используется хук useState. Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React.",
			},
			{
				code: "import React, { useState } from 'react';\n\nfunction Example() {\n    // Объявление новой переменной состояния «count»\n    const [count, setCount] = useState(0);\n    //...\n}",
			},
			{
				text: "Вызов useState объявляет переменную состояния, в качестве аргумента принимает единственный аргумент - начальное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом. Возвращает пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем const [count, setCount] = useState(). Это похоже на this.state.count и this.setState в классах, с той лишь разницей, что сейчас мы принимаем их сразу в паре.",
			},
			{
				text: "Если нам нужно было бы хранить два разных значения в состоянии, то пришлось бы вызвать useState() дважды.",
			},
			{
				code: "const [count, setCount] = useState(0);\nconst [price, setPrice] = useState(0);",
			},
			{
				title: "Обновление состояния",
			},
			{
				text: "Для обновления состояния вызывается функция setState():",
			},
			{
				code: 'this.setState({welcome: "Привет React"});',
			},
			{
				text: "Изменение состояния вызовет повторный рендеринг компонента, в соответствии с чем веб-страница будет обновлена. В то же время не стоит изменять свойства состояния напрямую. При этом нам не обязательно обновлять все его значения. В процессе работы программы мы можем обновить только некоторые свойства. Тогда необновленные свойства будут сохранять старые значения. Пример обновления состояния:",
			},
			{
				code: '// так делать нельзя\nthis.state.welcome = "Привет React"; \n// правильное изменение состояния \nclass ClickButton extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {class: "off", label: "Нажми"}; \n        this.press = this.press.bind(this);\n    }\n    press(){\n        let className = (this.state.class==="off")?"on":"off";\n        this.setState({class: className});\n    }\n    render() {\n        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;\n    }\n}',
			},
			{
				text: "Для изменения состояния в случае использования хука useState() используется функция полученная при вызове хука:",
			},
			{
				code: "const [count, setCount] = useState(0);\n//...\n<button onClick={() => setCount(count + 1)}>\n    Нажми на меня\n</button>",
			},
			{
				title: "Асинхронное обновление",
			},
			{
				text: "При наличии нескольких вызовов setState() React может объединять их в один общий пакет обновлений для увеличения производительности. Так как объекты this.props и this.state могут обновляться асинхронно, не стоит полагаться на значения этих объектов для вычисления состояния. Например:",
			},
			{
				code: "this.setState({\n    counter: this.state.counter + this.props.increment,\n});",
			},
			{
				text: "Для обновления надо использовать другую версию функции setState(), которая в качестве параметра принимает функцию. Данная функция имеет два параметра: предыдущее состояние объекта state и объект props на момент применения обновления:",
			},
			{
				code: "this.setState(function(prevState, props) {\n    return {\n        counter: prevState.counter + props.increment\n    };\n});\n//например, два последовательных вызова setState()\n// увеличит значение только на 1\npress(){ \n    this.setState({counter: this.state.counter + parseInt(this.props.increment)});\n    this.setState({counter: this.state.counter + parseInt(this.props.increment)});\n}\n// теперь значение увеличивается на 2\nincrementCounter(prevState, props) {\n    return {\n      counter: prevState.counter + parseInt(props.increment)\n    };\n}\npress(){\n    this.setState(this.incrementCounter);\n    this.setState(this.incrementCounter);\n}\n\n",
			},
			{
				text: "Это равносильно и для useState():",
			},
			{
				code: "function handleClick() {\n    setAge(age + 1); // setAge(42 + 1)\n    setAge(age + 1); // setAge(42 + 1)\n    setAge(age + 1); // setAge(42 + 1)\n}\n\nfunction handleClick() {\n    setAge(a => a + 1); // setAge(42 => 43)\n    setAge(a => a + 1); // setAge(43 => 44)\n    setAge(a => a + 1); // setAge(44 => 45)\n}",
			},
		],
	},
	{
		path: "lifecycle",
		title: "Lifecycle",
		content: [
			{
				text: "В процессе работы компонент проходит через ряд этапов жизненного цикла. На каждом из этапов вызывается определенная функция, в которой мы можем определить какие-либо действия.",
			},
			{
				text: "У каждого компонента в React есть три основные фазы:",
			},
			{
				list: ["монтирование", "обновление", "размонтирование"],
			},
			{
				title: "Монтирование",
			},
			{
				text: "Монтирование означает размещение элементов в DOM. React имеет четыре встроенных метода, которые вызываются в этом порядке при монтировании компонента:",
			},
			{
				list: [
					"constructor()",
					"getDerivedStateFromProps()",
					"render()",
					"componentDidMount()",
				],
			},
			{
				text: "Метод render() является обязательным  и является методом, который фактически выводит HTML в DOM. Он всегда будет вызываться, остальные методы являются необязательными и будут вызываться, если вы их определите.",
			},
			{
				text: "Метод constructor() вызывается прежде всего, когда компонент инициируется, и это естественное место для установки начальных state и других начальных значений. Метод constructor() вызывается с props, в качестве аргументов, и вы всегда должны начинать с вызова super(props), это инициирует метод конструктора родителя и позволяет компоненту наследовать методы от своего родителя ( React.Component).",
			},
			{
				code: "class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: \"red\"};\n    }\n    render() {\n        return (\n            <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        );\n    }\n}\n\nReactDOM.render(<Header />, document.getElementById('root'));",
			},
			{
				text: "Метод getDerivedStateFromProps()вызывается непосредственно перед рендерингом элемента(ов) в DOM. Это естественное место для установки stateобъекта на основе начального props. Он принимает stateв качестве аргумента и возвращает объект с изменениями в файле state. В приведенном ниже примере предпочтительным цветом является «красный», но метод getDerivedStateFromProps()обновляет любимый цвет на основе favcolатрибута:",
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    static getDerivedStateFromProps(props, state) {\n        return {favoritecolor: props.favcol };\n    }\n    render() {\n        return (\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        );\n    }\n}\n\nReactDOM.render(<Header favcol="yellow"/>, document.getElementById(\'root\'));',
			},
			{
				text: "Метод componentDidMount()вызывается после рендеринга компонента. Здесь вы запускаете операторы, требующие, чтобы компонент уже был помещен в DOM.",
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    componentDidMount() {\n        setTimeout(() => {\n        this.setState({favoritecolor: "yellow"})\n        }, 1000)\n    }\n    render() {\n        return (\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        );\n    }\n}\n\nReactDOM.render(<Header />, document.getElementById(\'root\'));',
			},
			{
				title: "Обновление",
			},
			{
				text: "Следующим этапом жизненного цикла является обновление компонента. Компонент обновляется всякий раз, когда происходит изменение компонента state или  props. React имеет пять встроенных методов, которые вызываются в указанном порядке при обновлении компонента:",
			},
			{
				list: [
					"getDerivedStateFromProps()",
					"shouldComponentUpdate()",
					"render()",
					"getSnapshotBeforeUpdate()",
					"componentDidUpdate()",
				],
			},
			{
				text: "Также при обновлениях getDerivedStateFromProps вызывается метод. Это первый метод, который вызывается при обновлении компонента. Это по-прежнему естественное место для установки state объекта на основе исходных реквизитов. В приведенном ниже примере есть кнопка, которая изменяет любимый цвет на синий, но поскольку вызывается метод getDerivedStateFromProps(), который обновляет состояние цветом из атрибута favcol, любимый цвет по-прежнему отображается желтым:",
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    static getDerivedStateFromProps(props, state) {\n        return {favoritecolor: props.favcol };\n    }\n    changeColor = () => {\n        this.setState({favoritecolor: "blue"});\n    }\n    render() {\n        return (\n        <div>\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        <button type="button" onClick={this.changeColor}>Change color</button>\n        </div>\n        );\n    }\n}\n\nReactDOM.render(<Header favcol="yellow"/>, document.getElementById(\'root\'))',
			},
			{
				text: "В методе shouldComponentUpdate() вы можете вернуть логическое значение, которое указывает, должен ли React продолжать рендеринг или нет. Значение по умолчанию равно true. В приведенном ниже примере показано, что происходит, когда shouldComponentUpdate()метод возвращает значение false:",
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    shouldComponentUpdate() {\n        return false; // замени на true и сравни результат\n    }\n    changeColor = () => {\n        this.setState({favoritecolor: "blue"});\n    }\n    render() {\n        return (\n        <div>\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        <button type="button" onClick={this.changeColor}>Change color</button>\n        </div>\n        );\n    }\n}\n\nReactDOM.render(<Header />, document.getElementById(\'root\'));',
			},
			{
				text: "Метод render(), конечно, вызывается, когда компонент обновляется, он должен повторно отображать HTML в DOM с новыми изменениями.",
			},
			{
				text: 'В методе getSnapshotBeforeUpdate() у вас есть доступ к props и state до обновления, а это означает, что даже после обновления вы можете проверить, какие значения были до обновления.\n\n                Если метод getSnapshotBeforeUpdate() присутствует, вы также должны включить метод componentDidUpdate(), иначе вы получите ошибку.\n                \n                Пример ниже может показаться сложным, но все, что он делает, это следующее:\n                \n                Когда компонент монтируется , он отображается любимым цветом "красный".\n                \n                Когда компонент смонтирован, таймер меняет состояние, и через одну секунду любимый цвет становится «желтым».\n                \n                Это действие запускает фазу обновления, и поскольку у этого компонента есть метод getSnapshotBeforeUpdate(), этот метод выполняется и записывает сообщение в пустой элемент DIV1.\n                \n                Затем метод componentDidUpdate() выполняется и записывает сообщение в пустой элемент DIV2:',
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    componentDidMount() {\n        setTimeout(() => {\n        this.setState({favoritecolor: "yellow"})\n        }, 1000)\n    }\n    getSnapshotBeforeUpdate(prevProps, prevState) {\n        document.getElementById("div1").innerHTML =\n        "Before the update, the favorite was " + prevState.favoritecolor;\n    }\n    componentDidUpdate() {\n        document.getElementById("div2").innerHTML =\n        "The updated favorite is " + this.state.favoritecolor;\n    }\n    render() {\n        return (\n        <div>\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        <div id="div1"></div>\n        <div id="div2"></div>\n        </div>\n        );\n    }\n}',
			},
			{
				text: 'Метод componentDidUpdate вызывается после обновления компонента в DOM.\n\n              Пример ниже может показаться сложным, но все, что он делает, это следующее:\n              \n              Когда компонент монтируется , он отображается любимым цветом "красный".\n              \n              Когда компонент смонтирован, таймер меняет состояние, и цвет становится «желтым».\n              \n              Это действие запускает фазу обновления, и поскольку у этого компонента есть метод componentDidUpdate, этот метод выполняется и записывает сообщение в пустой элемент DIV:',
			},
			{
				code: 'class Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {favoritecolor: "red"};\n    }\n    componentDidMount() {\n        setTimeout(() => {\n        this.setState({favoritecolor: "yellow"})\n        }, 1000)\n    }\n    componentDidUpdate() {\n        document.getElementById("mydiv").innerHTML =\n        "The updated favorite is " + this.state.favoritecolor;\n    }\n    render() {\n        return (\n        <div>\n        <h1>My Favorite Color is {this.state.favoritecolor}</h1>\n        <div id="mydiv"></div>\n        </div>\n        );\n    }\n}',
			},
			{
				title: "Размонтирование",
			},
			{
				text: "Следующий этап жизненного цикла — это когда компонент удаляется из DOM или размонтируется , как любит это называть React.\n\n            В React есть только один встроенный метод, который вызывается при размонтировании компонента:",
			},
			{
				list: ["componentWillUnmount"],
			},
			{
				text: "Метод componentWillUnmount вызывается, когда компонент собирается удалить из DOM.",
			},
			{
				code: 'class Container extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {show: true};\n    }\n    delHeader = () => {\n        this.setState({show: false});\n    }\n    render() {\n        let myheader;\n        if (this.state.show) {\n        myheader = <Child />;\n        };\n        return (\n        <div>\n        {myheader}\n        <button type="button" onClick={this.delHeader}>Delete Header</button>\n        </div>\n        );\n    }\n    }\n    \n    class Child extends React.Component {\n    componentWillUnmount() {\n        alert("The component named Header is about to be unmounted.");\n    }\n    render() {\n        return (\n        <h1>Hello World!</h1>\n        );\n    }\n}',
			},
		],
	},
	{
		path: "events",
		title: "Events",
		content: [
			{
				text: "\n                Как и события HTML DOM, React может выполнять действия на основе пользовательских событий.\n                \n                React имеет те же события, что и HTML: щелчок, изменение, наведение мыши и т. д.",
			},
			{
				text: "События React записываются в синтаксисе camelCase,                \n                обработчики событий React записываются внутри фигурных скобок:",
			},
			{
				code: '//React\n<button onClick={shoot}>Take the Shot!</button>\n//HTML\n<button onclick="shoot()">Take the Shot!</button>\n',
			},
			{
				code: 'function Football() {\n    const shoot = () => {\n        alert("Great Shot!");\n    }\n    \n    return (\n        <button onClick={shoot}>Take the shot!</button>\n    );\n}',
			},
			{
				text: "В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.",
			},
			{
				code: "function Form() {\n    function handleSubmit(e) {\n        e.preventDefault();\n        console.log('Отправлена форма.');\n    }\n    \n    return (\n        <form onSubmit={handleSubmit}>\n        <button type=\"submit\">Отправить</button>\n        </form>\n    );\n}",
			},
			{
				text: "Чтобы передать аргумент обработчику событий, используйте стрелочную функцию.",
			},
			{
				code: 'function Football() {\n    const shoot = (a) => {\n        alert(a);\n    }\n    \n    return (\n        <button onClick={() => shoot("Goal!")}>Take the shot!</button>\n    );\n}',
			},
			{
				text: "Обработчики событий имеют доступ к событию React, вызвавшему функцию. В нашем примере это событие «щелчок».",
			},
			{
				code: 'function Football() {\n    const shoot = (a, b) => {\n        alert(b.type); // event, который вызвал функцию - click\n    }\n    \n    return (\n        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>\n    );\n}',
			},
			{
				text: "Обработчики событий получают экземпляр SyntheticEvent, это кроссбраузерная обёртка над нативным экземпляром события. У неё такой же интерфейс, как и у нативного события, включая методы stopPropagation() и preventDefault(). Эта обёртка помогает событиям работать одинаково во всех браузерах.",
			},
			{
				text: "Если вам всё-таки нужно получить нативное браузерное событие, обратитесь к атрибуту nativeEvent. Синтетические события отличаются от нативных событий браузера и непосредственно не связаны с ними. ",
			},
			{
				text: "React нормализует события так, чтобы они содержали одинаковые свойства во всех браузерах. React поддерживает следующие события:",
			},
			{
				list: [
					"События буфера обмена",
					"Композиционные события",
					"События клавиатуры",
					"События фокуса",
					"События формы",
					"Общие события",
					"События мыши",
					"События курсора",
					"События выбора",
					"Сенсорные события",
					"События UI",
					"События колёсика мыши",
					"События медиа-элементов",
					"События изображений",
					"События анимаций",
					"События переходов",
					"Другие события",
				],
			},
			{
				text: "Список всех событий:",
			},
			{
				list: [
					"onKeyDown",
					"onKeyPress",
					"onKeyUp",
					"onFocus",
					"onBlur",
					"onChange",
					"onInput",
					"onInvalid",
					"onReset",
					"onSubmit",
					"onError",
					"onLoad",
					"onClick",
					"onContextMenu",
					"onDoubleClick",
					"onDrag",
					"onDragEnd",
					"onDragEnter",
					"onDragExit",
					"onDragLeave",
					"onDragOver",
					"onDragStart",
					"onDrop",
					"onMouseDown",
					"onMouseEnter",
					"onMouseLeave",
					"onMouseMove",
					"onMouseOut",
					"onMouseOver",
					"onMouseUp",
					"onPointerDown",
					"onPointerMove",
					"onPointerUp",
					"onPointerCancel",
					"onGotPointerCapture",
					"onLostPointerCapture",
					"onPointerEnter",
					"onPointerLeave",
					"onPointerOver",
					"onPointerOut",
					"onSelect",
					"onTouchCancel",
					"onTouchEnd",
					"onTouchMove",
					"onTouchStart",
					"onScroll",
					"onWheel",
					"onAbort",
					"onCanPlay",
					"onCanPlayThrough",
					"onDurationChange",
					"onEmptied",
					"onEncrypted",
					"onEnded",
					"onLoadedData",
					"onLoadedMetadata",
					"onLoadStart",
					"onPause",
					"onPlay",
					"onPlaying",
					"onProgress",
					"onRateChange",
					"onSeeked",
					"onSeeking",
					"onStalled",
					"onSuspend",
					"onTimeUpdate",
					"onVolumeChange",
					"onWaiting",
					"onAnimationStart",
					"onAnimationEnd",
					"onAnimationIteration",
					"onTransitionEnd",
					"onToggle",
				],
			},
		],
	},
	{
		path: "key",
		title: "Key",
		content: [
			{
				text: "Как правило, вы будете рендерить списки внутри какого-нибудь компонента.",
			},
			{
				text: "Если запустить рендер элементов массива, то мы увидим предупреждение о том, что у каждого элемента массива должен быть ключ (key). «Ключ» — это специальный строковый атрибут, который нужно указывать при создании списка элементов.",
			},
			{
				code: "function NumberList(props) {\n    const numbers = props.numbers;\n    const listItems = numbers.map((number) =>\n        <li key={number.toString()}>{number}</li>\n    );\n    return (\n        <ul>{listItems}</ul>\n    );\n}",
			},
			{
				text: "Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени.",
			},
			{
				text: "Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи.",
			},
			{
				text: "Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ.",
			},
			{
				text: "Не рекомендуется использовать индексы как ключи, если порядок элементов может поменяться. Это негативно скажется на производительности и может вызвать проблемы с состоянием компонента",
			},
			{
				text: "Ключи нужно определять непосредственно внутри массивов. Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для <ListItem /> в массиве, а не в элементе <li> внутри самого ListItem.",
			},
			{
				code: "function ListItem(props) {\n    // Правильно! Не нужно определять здесь ключ:\n    return <li>{props.value}</li>;\n}\n    \nfunction NumberList(props) {\n    const numbers = props.numbers;\n    const listItems = numbers.map((number) =>\n        // Правильно! Ключ нужно определять внутри массива:\n        <ListItem key={number.toString()} value={number} />\n    );\n    return (\n        <ul>\n        {listItems}\n        </ul>\n    );\n}",
			},
			{
				text: "Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.",
			},
			{
				text: "Ключи служат подсказками для React, но они никогда не передаются в ваши компоненты. Если в компоненте нужно то же самое значение, то передайте его явно через проп с другим именем.",
			},
			{
				text: "JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map():",
			},
			{
				code: "function NumberList(props) {\n    const numbers = props.numbers;\n    return (\n        <ul>\n        {numbers.map((number) =>\n            <ListItem key={number.toString()}\n                    value={number} />\n        )}\n        </ul>\n    );\n}",
			},
		],
	},
	{
		path: "refs",
		title: "Refs",
		content: [
			{
				text: "Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.",
			},
			{
				text: "В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними только через пропсы. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами. Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных. Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и DOM-элементом. React предоставляет лазейку для обоих случаев.",
			},
			{
				text: "Ситуации, в которых использование рефов является оправданным:",
			},
			{
				list: [
					"Управление фокусом, выделение текста или воспроизведение медиа.",
					"Императивный вызов анимаций.",
					"Интеграция со сторонними DOM-библиотеками.",
				],
			},
			{
				text: "Избегайте использования рефов в ситуациях, когда задачу можно решить декларативным способом.",
			},
			{
				text: "Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.",
			},
			{
				code: "class MyComponent extends React.Component {\n    constructor(props) {\n        super(props);\n        this.myRef = React.createRef();\n    }\n    render() {\n        return <div ref={this.myRef} />;\n    }\n}\n",
			},
			{
				text: "Когда реф передаётся элементу в методе render, ссылка на данный узел доступна через свойство рефа current.",
			},
			{
				code: "const node = this.myRef.current;",
			},
			{
				text: "Значение рефа отличается в зависимости от типа узла:        ",
			},
			{
				list: [
					"Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.",
					"Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа получает экземпляр смонтированного компонента.",
					"Нельзя использовать ref атрибут с функциональными компонентами, потому что для них не создаётся экземпляров.",
				],
			},
			{
				text: "В функциональных компонентах необходимо использовать хук useRef().",
			},
			{
				code: "const ref = useRef(initialValue)",
			},
			{
				text: "Параметры",
			},
			{
				list: [
					"initialValue: значение, которое вы хотите, чтобы свойство объекта ref current было изначально. Это может быть значение любого типа. Этот аргумент игнорируется после начального рендеринга.",
				],
			},
			{
				text: "useRef возвращает объект с одним свойством: current: Изначально установленное в initialValue. Позже вы можете установить его на что-то другое. Если вы передадите объект ref в React как ref атрибут узла JSX, React установит его current свойство. При следующих рендерах useRefбудет возвращаться тот же объект",
			},
			{
				text: "Не записывайте и не читайте ref.current во время рендеринга. Вместо этого вы можете читать или писать ссылки из обработчиков событий или эффектов",
			},
			{
				code: "import { useRef } from 'react';\nexport default function Form() {\n    const inputRef = useRef(null);\n    function handleClick() {\n        inputRef.current.focus();\n    }\n    return (\n    <>\n        <input ref={inputRef} />\n        <button onClick={handleClick}>Focus the input</button>\n    </>\n    );\n}",
			},
		],
	},
	{
		path: "async",
		title: "Асинхронные запросы",
		content: [
			{
				text: "Асинхронные запросы нужны для работы с API. Получение результата может занять какое-то время. Запрос должен выполняться в фоновом режиме, чтобы не блокировать работу приложения.",
			},
			{
				text: "Работы с асинхронными запросами в React обычно выполняется с использованием хука useEffect(), для функционального и с помощью методов жизненного цикла, для классового компонентов",
			},
			{
				text: "Пример с функциональным компонентом:",
			},
			{
				code: "import axios from \"axios\"; // библиотека для работы с http запросами, можно обойтись без нее стандартным fetch()\nfunction Ax() {\n    const [data, setData] = useState([]);\n    useEffect(() => {\n        (async () => {\n            const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');\n            setData(resp.data)\n        })()\n    },[])\n    return (\n        <ul>\n            {data.map(e => <li style={{listStyle: 'none', textAlign: 'start', margin: '10px 0'}} key={e.id}>{e.title} {e.checked ? '✔️' : '❌'}</li>)}\n        </ul>\n    )\n}\n        ",
			},
			{
				text: "Для классового компонента с использованием методов жизненного цикла:",
			},
			{
				code: 'class CardsList extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            wines: [],\n        isGetError: false\n        };\n        this.getData = this.getData.bind(this);\n    }\n    \n    async getData() {\n        try {\n            const resp = await axios.get("https://api.sampleapis.com/wines/" + this.props.sort);\n            this.setState(() => ({ wines: resp.data }));\n        } \n        catch (err) {\n            this.setState({ isGetError: true });\n        }\n    }\n    \n    componentDidMount() {\n        this.getData();\n    }\n    \n    componentDidUpdate(prevProps) {\n        prevProps.sort !== this.props.sort && this.getData();\n    }\n    \n    render() {\n        const { wines, isGetError } = this.state;\n        const winesList = wines.map((wine) => <Card key={wine.id} {...wine} />);\n        return (\n        <>\n            {isGetError ? (\n            <h1 className=" text-5xl text-center pt-10">ERROR...</h1>\n            ) : (\n            <div className="grid grid-cols-1 gap-5 mx-auto mt-10 w-3/4 sm:grid-cols-2 lg:grid-cols-3">\n                {winesList}\n            </div>\n            )}\n        </>\n        );\n    }\n}',
			},
		],
	},
	{
		path: "virtual-dom",
		title: "Virtual DOM",
		content: [
			{
				text: "Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. Этот процесс называется согласованием.",
			},
			{
				text: "Такой подход и делает API React декларативным: вы указываете, в каком состоянии должен находиться пользовательский интерфейс, а React добивается, чтобы DOM соответствовал этому состоянию. Это абстрагирует манипуляции с атрибутами, обработку событий и ручное обновление DOM, которые в противном случае пришлось бы использовать при разработке приложения.",
			},
			{
				text: "Поскольку «виртуальный DOM» — это скорее паттерн, чем конкретная технология, этим термином иногда обозначают разные понятия. В мире React «виртуальный DOM» обычно ассоциируется с React-элементами, поскольку они являются объектами, представляющими пользовательский интерфейс. Тем не менее, React также использует внутренние объекты, называемые «волокнами» (fibers), чтобы хранить дополнительную информацию о дереве компонентов. Их также можно считать частью реализации «виртуального DOM» в React.",
			},
			{
				text: "Теневой DOM (Shadow DOM) — это браузерная технология, предназначенная в основном для определения области видимости переменных и CSS в веб-компонентах. Виртуальный DOM — это концепция, реализованная библиотеками в JavaScript поверх API браузера.",
			},
		],
	},
	{
		path: "fragment",
		title: "Fragment",
		content: [
			{
				text: "Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.",
			},
			{
				code: "render() {\n    return (\n        <React.Fragment>\n            <ChildA />\n            <ChildB />\n            <ChildC />\n        </React.Fragment>\n    );\n}\n//сокращенная форма\nreturn (\n    <>\n        <ChildA />\n        //...\n    </>\n);",
			},
			{
				text: "Можно использовать <></> так же, как используется любой другой элемент. Однако такая запись не поддерживает ключи или атрибуты.",
			},
			{
				text: "Фрагменты, объявленные с помощью <React.Fragment>, могут иметь ключи. Например, их можно использовать при создании списка определений, преобразовав коллекцию в массив фрагментов.",
			},
			{
				text: "key — это единственный атрибут, допустимый у Fragment.",
			},
		],
	},
	{
		path: "react-memo",
		title: "React.Memo",
		content: [
			{
				text: "Memo позволяет пропустить повторный рендеринг компонента, если его свойства не изменились.",
			},
			{
				text: 'Оберните компонент, memo чтобы получить "запомненную" версию этого компонента. Эта запомненная версия вашего компонента обычно не будет повторно рендерится при повторном рендере его родительского компонента, если его реквизиты не изменились. Но React все еще может перерендерить его: мемоизация — это оптимизация производительности, а не гарантия.',
			},
			{
				code: "import { memo } from 'react';\n    const SomeComponent = memo(function SomeComponent(props) { //memo(Component, arePropsEqual?) \n    // ...\n});",
			},
			{
				text: "Параметры",
			},
			{
				list: [
					"Component: Компонент, который вы хотите запомнить. Memo не изменяет этот компонент, а вместо этого возвращает новый, запомненный компонент. Допускается любой допустимый компонент React, включая функции и компоненты.",
					"Необязательный arePropsEqual : функция, которая принимает два аргумента: предыдущие реквизиты компонента и его новые реквизиты. Она должна возвращать, true если старые и новые реквизиты равны: то есть, если компонент будет отображать один и тот же вывод и вести себя с новыми реквизитами так же, как и со старыми. В противном случае она должен вернуть false. Обычно вы не указываете эту функцию. По умолчанию React сравнивает каждое свойство с Object.is().",
				],
			},
			{
				text: "Чтобы запомнить компонент, оберните его memo и используйте значение, которое он возвращает, вместо исходного компонента:",
			},
			{
				code: "const Greeting = memo(function Greeting({ name }) {\n    return <h1>Hello, {name}!</h1>;\n});\n\nexport default Greeting;",
			},
			{
				text: "Компонент React всегда должен иметь чистую логику рендеринга. Это означает, что он должен возвращать тот же результат, если его реквизиты, состояние и контекст не изменились. Используя memo, вы сообщаете React, что ваш компонент соответствует этому требованию, поэтому React не нужно повторно отображать, пока его реквизиты не изменились. Даже с memo, ваш компонент будет перерисовываться, если изменится его собственное состояние или контекст, который он использует.",
			},
			{
				text: "Оптимизация с помощью memo имеет смысл только в том случае, если ваш компонент часто повторно рендерится с одними и теми же реквизитами, а его логика повторного рендеринга требует больших затрат. Если нет заметной задержки при повторном рендеринге вашего компонента, в memo, в этом случае, нет необходимости.",
			},
		],
	},
	{
		path: "useEffect",
		title: "useEffect",
		content: [
			{
				text: "useEffect — это React Hook, который позволяет синхронизировать компонент с внешней системой. Это включает в себя работу с сетью, DOM браузера, анимацию, виджеты, написанные с использованием другой библиотеки пользовательского интерфейса, и другой код, не относящийся к React.",
			},
			{
				title: "useEffect(setup, dependencies?)",
			},
			{
				text: "Параметры",
			},
			{
				list: [
					"setup: Функция с логикой вашего эффекта. Ваша функция настройки также может дополнительно возвращать функцию очистки . Когда ваш компонент будет добавлен в DOM, React запустит вашу функцию настройки. После каждого повторного рендеринга с измененными зависимостями React сначала запускает функцию очистки (если вы ее предоставили) со старыми значениями, а затем запускает функцию настройки с новыми значениями. После того, как ваш компонент будет удален из DOM, React запустит вашу функцию очистки.",
					"необязательный dependencies : список всех реактивных значений, на которые ссылается setup код. Реактивные значения включают реквизиты, состояние и все переменные и функции, объявленные непосредственно внутри тела вашего компонента. Список зависимостей должен иметь постоянное количество элементов и быть встроенным, как [dep1, dep2, dep3]. React будет сравнивать каждую зависимость с ее предыдущим значением, используя Object.is сравнение. Если вы опустите этот аргумент, ваш эффект будет повторно запускаться после каждого повторного рендеринга компонента.",
				],
			},
			{
				text: "useEffect является хуком, поэтому вы можете вызывать его только на верхнем уровне вашего компонента или ваших собственных хуков. Вы не можете вызывать его внутри циклов или условий. Если вам это нужно, извлеките новый компонент и переместите в него состояние.",
			},
			{
				title: "Подключение",
			},
			{
				code: "import { useEffect } from 'react';\nimport { createConnection } from './chat.js';\n\nfunction ChatRoom({ roomId }) {\n    const [serverUrl, setServerUrl] = useState('https://localhost:1234');\n\n    useEffect(() => { // функция (код установки)\n        const connection = createConnection(serverUrl, roomId);\n        connection.connect();\n        return () => { // код очистки\n            connection.disconnect();\n        };\n    }, [serverUrl, roomId]); // зависимости\n    // ...\n}",
			},
			{
				text: "React вызывает ваши функции настройки и очистки всякий раз, когда это необходимо, что может происходить несколько раз:",
			},
			{
				list: [
					"Код установки запускается, когда ваш компонент добавляется на страницу (монтируется) .",
					"После каждого повторного рендеринга компонента, где изменились зависимости :\n            1) код очистки работает со старыми реквизитами и состоянием.\n            2) код установки запускается с новыми реквизитами и состоянием.",
					"Код очистки запускается в последний раз после удаления вашего компонента со страницы (размонтирования).",
				],
			},
			{
				title: "Указание реактивных зависимостей",
			},
			{
				text: "Реактивные значения включают свойства и все переменные и функции, объявленные непосредственно внутри вашего компонента. Если код вашего Эффекта не использует никаких реактивных значений, его список зависимостей должен быть пустым ([]):",
			},
			{
				text: "Эффект с пустыми зависимостями не запускается повторно, когда какие-либо реквизиты или состояние вашего компонента изменяются.",
			},
			{
				title: "Обновление состояния на основе предыдущего состояния эффекта",
			},
			{
				text: "Если вы хотите обновить состояние на основе предыдущего состояния Эффекта, вы можете столкнуться с проблемой:",
			},
			{
				code: "function Counter() {\n    const [count, setCount] = useState(0);\n    \n    useEffect(() => {\n        const intervalId = setInterval(() => {\n        setCount(count + 1); // хотим увеличивать count каждую секунду\n        }, 1000)\n        return () => clearInterval(intervalId);\n    }, [count]); // 🚩 ... указание count как зависимости всегда очищает интервал\n    // ...\n}",
			},
			{
				text: "Чтобы исправить это, используйте стрелочную функцию (c => c + 1) в функции обновления состояния setCount :",
			},
			{
				code: "useEffect(() => {\n    const intervalId = setInterval(() => {\n        setCount(c => c + 1); // ✅ теперь обновляется\n    }, 1000);\n        return () => clearInterval(intervalId);\n}, []); // ✅ count больше не зависимость",
			},
			{
				text: "Избегайте использования функции, созданной во время рендеринга, в качестве зависимости. Вместо этого объявите её внутри эффекта:",
			},
			{
				code: "useEffect(() => {\n    function createOptions() { \n        return {\n        serverUrl: serverUrl,\n        roomId: roomId\n        };\n    }\n    const options = createOptions();\n    const connection = createConnection(options);\n    connection.connect();\n    return () => connection.disconnect();\n}, [roomId]); // ✅ функция не является зависимостью\n\n// так не надо\nfunction createOptions() { // 🚩 функция будет создаваться при каждом рендере\n    return {\n      serverUrl: serverUrl,\n      roomId: roomId\n    };\n}\nuseEffect(() => {\n    const options = createOptions(); // используем внутри эффекта\n    const connection = createConnection();\n    connection.connect();\n    return () => connection.disconnect();\n}, [createOptions]); // 🚩 функция является зависимостью",
			},
		],
	},
	{
		path: "useContext",
		title: "useContext",
		content: [
			{
				text: "useContext — это React Hook, который позволяет вам читать и подписываться на контекст вашего компонента.",
			},
			{
				title: "useContext(SomeContext)",
			},
			{
				text: "Параметры",
			},
			{
				list: [
					"SomeContext: контекст, который вы ранее создали с помощью createContext. Сам контекст не содержит информацию, он представляет только ту информацию, которую вы можете предоставить или прочитать из компонентов.",
				],
			},
			{
				code: "import { useContext } from 'react';\n\nfunction MyComponent() {\n    const theme = useContext(ThemeContext);\n// ...",
			},
			{
				text: "useContext возвращает значение контекста для вызывающего компонента. Он определяется как value переданный ближайшему SomeContext.Provider выше вызывающего компонента в дереве. Если такого провайдера нет, то возвращаемое значение будет тем, defaultValue которое вы определили в createContext для этого контекста. Возвращаемое значение всегда актуально. React автоматически перерисовывает компоненты, которые считывают некоторый контекст, если он изменяется.",
			},
			{
				text: "Неважно, сколько уровней компонентов находится между провайдером и потребителем контекста. UseContext() всегда ищет ближайшего провайдера над компонентом, который его вызывает. Он ищет вверх и не рассматривает провайдеров в компоненте, из которого вы вызываете useContext().",
			},
			{
				text: "Пример использования контекста в этом проекте:",
			},
			{
				code: "//Создадим компонент с нашим контекстом ThemeContext.js\nimport { useState, useEffect, createContext } from 'react'\nconst Context = createContext(); //создадим контекст без значения по умолчанию\nconst ThemeContext = (props) => {\n    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // читаем сохранненую тему из localStorage, если её нет используем темную тему\n    useEffect(()=>{\n        localStorage.setItem('theme',theme); // записываем информацию о выбранной теме в localStorage\n    },[theme])\n    const toggleTheme = () => {\n        setTheme((theme)=>theme === 'dark' ? 'light' : 'dark');\n    }\n    const ctx = {\n        theme,\n        toggleTheme\n    }\n    return (\n        <Context.Provider value={ctx}>{props.children}</Context.Provider> // возвращаем обертку с контекстом для наших компонентов\n    )\n}\nexport {ThemeContext, Context}; // экспортируем компонент и контекст\n\n//оборачиваем наши компоненты в index.js в обертку с контекстом для дальнейшего использования\nimport {ThemeContext} from './components/ThemeContext'\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <ThemeContext>\n      //...\n    </ThemeContext>\n  </React.StrictMode>\n);\n// Используем наш контекст в компонентах\n// NavigationLinks.js\nimport { Context } from \"./ThemeContext\"; // импорт контекста\nconst NavigationLinks = () => {\n    const {theme} = useContext(Context);\n    return (\n        <nav className={\"navigation \" + theme }> // используем полученный контекст для выбора класса css\n            /...\n        </nav>\n    )\n}\n",
			},
			{
				title: "API",
			},
			{
				code: "const MyContext = React.createContext(defaultValue)",
			},
			{
				text: "Создаёт объект Context. Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.",
			},
			{
				text: "Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать undefined как значение Provider, компоненты, использующие этот контекст, не будут использовать defaultValue. ",
			},
			{
				code: "<MyContext.Provider value={/* некоторое значение */}>",
			},
			{
				text: "Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.",
			},
			{
				text: "Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.",
			},
			{
				text: "Все потребители, которые являются потомками Provider, будут повторно рендериться, как только проп value у Provider изменится. Потребитель (включая .contextType и useContext) перерендерится при изменении контекста, даже если его родитель, не использующий данный контекст, блокирует повторные рендеры с помощью shouldComponentUpdate.",
			},
			{
				title: "Использование в классовых компонентах",
			},
			{
				code: "class MyClass extends React.Component {\ncomponentDidMount() {\n    let value = this.context;\n    /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */\n}\ncomponentDidUpdate() {\n    let value = this.context;\n    /* ... */\n}\ncomponentWillUnmount() {\n    let value = this.context;\n    /* ... */\n}\nrender() {\n    let value = this.context;\n    /* отрендерить что-то, используя значение MyContext */\n    }\n}\nMyClass.contextType = MyContext;\n\n//используя static\nclass MyClass extends React.Component {\n    static contextType = MyContext;\n    render() {\n      let value = this.context;\n      /* отрендерить что-то, используя значение MyContext */\n    }\n  }\n",
			},
			{
				text: "В свойство класса contextType может быть назначен объект контекста, созданный с помощью React.createContext(). С помощью этого свойства вы можете использовать ближайшее и актуальное значение указанного контекста при помощи this.context. В этом случае вы получаете доступ к контексту, как во всех методах жизненного цикла, так и в рендер-методе.",
			},
			{
				code: "<MyContext.Consumer>\n    {value => /* отрендерить что-то, используя значение контекста */}\n</MyContext.Consumer>",
			},
			{
				text: "Consumer — это React-компонент, который подписывается на изменения контекста. В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.",
			},
			{
				text: "Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().",
			},
			{
				text: "Consumer можно заменить использованием хука useContext().",
			},
			{
				text: "Объекту Context можно задать строковое свойство displayName. React DevTools использует это свойство при отображении контекста.",
			},
			{
				code: 'const MyContext = React.createContext(/* некоторое значение */);\nMyContext.displayName = \'MyDisplayName\';\n\n<MyContext.Provider> // "MyDisplayName.Provider" в DevTools\n<MyContext.Consumer> // "MyDisplayName.Consumer" в DevTools',
			},
		],
	},
	{
		path: "useMemo",
		title: "useMemo",
		content: [
			{
				text: "useMemo — это React Hook, который позволяет кэшировать результат вычислений между повторными рендерингами.",
			},
			{
				code: "const cachedValue = useMemo(calculateValue, dependencies)",
			},
			{
				title: "useMemo(calculateValue, dependencies)",
			},
			{
				text: "Параметры",
			},
			{
				list: [
					"calculateValue: Функция, вычисляющая значение, которое вы хотите кэшировать. Она должна быть чистой, не должна принимать аргументов и должна возвращать значение любого типа. React вызовет вашу функцию во время первоначального рендеринга. При следующем рендеринге React снова вернет то же значение, если dependencies не изменились с момента последнего рендеринга. В противном случае он вызовет calculateValue, вернет результат и сохранит его, чтобы его можно было повторно использовать позже.",
					"dependencies: Список всех реактивных значений, на которые ссылается calculateValue. Реактивные значения включают реквизиты, состояние и все переменные и функции, объявленные непосредственно внутри тела вашего компонента. Список зависимостей должен иметь постоянное количество элементов и быть встроенным, как [dep1, dep2, dep3]. React будет сравнивать каждую зависимость с ее предыдущим значением, используя Object.is сравнение.",
				],
			},
			{
				text: "При начальном рендеринге useMemo возвращает результат вызова calculateValue без аргументов.\n\n        Во время следующих рендеров он либо вернет уже сохраненное значение из последнего рендера (если зависимости не изменились), либо снова вызовет и вернет возвращенный calculateValue результат.",
			},
			{
				code: "import { useMemo } from 'react';\n\nfunction TodoList({ todos, tab }) {\n    const visibleTodos = useMemo(() => filterTodos(todos, tab),[todos, tab]);\n    // ...\n}",
			},
			{
				text: "useMemo является хуком, поэтому вы можете вызывать его только на верхнем уровне вашего компонента или ваших собственных хуков. Вы не можете вызывать его внутри циклов или условий. Если вам это нужно, извлеките новый компонент и переместите в него состояние.",
			},
		],
	},
	{
		path: "router",
		title: "Router",
		content: [
			{
				text: "В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom.",
			},
			{
				text: "Router определяет набор маршрутов и, когда к приложению, приходит запрос, то Router выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.",
			},
			{
				text: "И также для выбора маршрута определен объект Routes. Он содержит набор маршрутов и позволяет выбрать первый попавшийся маршрут и его использовать для обработки.",
			},
			{
				text: "Каждый маршрут представляет объект Route. Он имеет ряд атрибутов. В частности, здесь для маршрута устанавливаются два атрибута:        ",
			},
			{
				list: [
					"path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL",
					"element - тот компонент, который отвечает за обработку запроса по этому маршруту",
				],
			},
			{
				text: 'Например, первый маршрут выступает в качестве корневого. Он сопоставляется с адресом "/" и обрабатывается компонентом Main.Второй маршрут будет сопоставляться с адресом "/about", а обрабатываться он будет компонентом About. Особо следует выделить третий маршрут:',
			},
			{
				code: '<Route path="/" element={<Main />} />\n<Route path="/about" element={<About />} />\n<Route path="*" element={<NotFound />} />',
			},
			{
				text: 'Путь в виде звездочки - "*" указывает, что этот маршрут будет сопоставляться со всеми адресами URL, которые не соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound. Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.',
			},
			{
				text: "В рамках маршрутов в React можно определять дочерние маршруты. Такие подмаршруты будут отсчитываться от главного маршрута. Но для построения подобной системы есть ряд подходов. Рассмотрим их.",
			},
			{
				code: '<Router>\n    <div>\n        <Routes>\n        <Route path="/" element={<h2>Главная</h2>} />\n        <Route path="/products/*" element={<Products />} />\n        <Route path="*" element={<h2>Ресурс не найден</h2>} />\n        </Routes>\n    </div>\n</Router>',
			},
			{
				text: 'Для обработки запроса "/products" здесь определен маршрут, который обрабатывается компонентом Products:',
			},
			{
				code: '<Route path="/products/*" element={<Products />} />',
			},
			{
				text: 'Обратите внимание на шаблон пути: path="/products/*". Символ * указывает, что компонент Products будет обрабатывать маршруты, которые начинаются "/products/", но после слеша также могут идти и другие символы.',
			},
			{
				code: 'function Products(){\n    return <div>\n            <h2>Товары</h2>\n            <Routes>\n                <Route path="/phones" element={<Phone />} />\n                <Route path="/tablets" element={<Tablet />} />\n            </Routes>\n        </div>;\n}',
			},
			{
				text: 'Вложенные маршруты отсчитываются фактически от главного маршрута "/products". То есть маршрут "/phones" будет обрабатывать запросы по пути "/phones", который добавляется к пути главного компонента - "/products", то есть в итоге по пути "/products/phones". Аналогичным образом запросы по пути "/products/tablets" будут обрабатываться компонентом Tablet.',
			},
			{
				text: "Можно использовать Outlet для вставки содержимого дочернего компонента в главный. Пример из этого проекта:",
			},
			{
				code: "import { Outlet } from \"react-router-dom\";\n//...\nconst Main = () => {\n    return (\n        <main className=\"main\">\n            //...\n            <Outlet />\n        </main>\n    );\n}\n\nfunction App() {\n    const {theme} = useContext(Context);\n    return (\n      <div className={\"App \" + theme}>\n        <Header/>\n        <Main />\n      </div>\n    );\n}\nconst router = createBrowserRouter( // другой способ создания роутера\n    [\n      {\n        path: '*',\n        element: <ErrorPage />, // 404\n      },\n      {\n        path: 'react-cheatsheet/',\n        element: <Home />, // домашняя страница\n      },\n      {\n        path: 'react-cheatsheet/topic',\n        element: <App />,\n        children: [ // дочерние роуты, которые будут вставляться в <App />\n          ...contentData.map(topic => {\n            const { path, title, content } = topic;\n            return {\n              path: path,\n              element: <Topic title={title} content={content} />,\n            }\n          })\n        ]\n      },\n    ]\n  )\nroot.render(\n    <React.StrictMode>\n      <ThemeContext>\n        <RouterProvider router={router}> // Оборачиваем приложение в роутер\n          <Home />\n        </RouterProvider>\n      </ThemeContext>\n    </React.StrictMode>\n  );\n",
			},
		],
	},
	{
		path: "forms",
		title: "Работа с формами",
		content: [
			{
				text: "По умолчанию браузер переходит на другую страницу при отправке HTML-форм. Если вас это устраивает, то не надо ничего менять, в React формы работают как обычно. Однако чаще всего форму удобнее обрабатывать с помощью JavaScript-функции, у которой есть доступ к введённым данным. Стандартный способ реализации такого поведения называется «управляемые компоненты». Он использует состояние компонента.",
			},
			{
				text: "Для отмены стандартного поведения события обычно используется метод event.preventDefault().",
			},
			{
				code: 'class NameForm extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {value: \'\'};\n        this.handleChange = this.handleChange.bind(this);\n        this.handleSubmit = this.handleSubmit.bind(this);\n    }\n    handleChange(event) {\n        this.setState({value: event.target.value});\n    }\n    handleSubmit(event) {\n        alert(\'Отправленное имя: \' + this.state.value);\n        event.preventDefault();\n    }\n    render() {\n        return (\n        <form onSubmit={this.handleSubmit}>\n            <label>Имя:\n                <input type="text" value={this.state.value} onChange={this.handleChange} />\n            </label>\n            <input type="submit" value="Отправить" />\n        </form>\n        );\n    }\n}',
			},
			{
				text: "В управляемом компоненте значение поля ввода всегда определяется состоянием React. Хотя это означает, что вы должны написать немного больше кода, теперь вы сможете передать значение и другим UI-элементам или сбросить его с других обработчиков событий.",
			},
			{
				title: "Неуправляемые компоненты",
			},
			{
				text: "В большинстве случаев при работе с формами мы рекомендуем использовать управляемые компоненты. В управляемом компоненте, данные формы обрабатываются React-компонентом. В качестве альтернативы можно использовать неуправляемые компоненты. Они хранят данные формы прямо в DOM.",
			},
			{
				text: "Вместо того, чтобы писать обработчик события для каждого обновления состояния, вы можете использовать неуправляемый компонент и читать значения из DOM через реф.",
			},
			{
				code: 'class NameForm extends React.Component {\n    constructor(props) {\n        super(props);\n        this.handleSubmit = this.handleSubmit.bind(this);\n        this.input = React.createRef();\n    }\n    \n    handleSubmit(event) {\n        alert(\'Отправленное имя: \' + this.input.current.value);\n        event.preventDefault();\n    }\n    \n    render() {\n        return (\n        <form onSubmit={this.handleSubmit}>\n            <label>Имя:<input type="text" ref={this.input} /></label>\n            <input type="submit" value="Отправить" />\n        </form>\n        );\n    }\n}',
			},
		],
	},
];
