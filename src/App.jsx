import './App.css';

const users = [
    {
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVDD_D0mDmK0UyXIh-yz-REXxz-Fyo9edsmIUR6BHUo-WYcwVRLa0OHxu9Pr_utVPhuI&usqp=CAU',
        name:'faslan',
        designation:'java developer',
        salary:'25000',

        code:1

    },
    {
        avatar:'data:image/jpeg;base64,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',
        name:'lansa',
        designation:'PHP developer',
        salary:'285000',
        code:2

    },
    {
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVDD_D0mDmK0UyXIh-yz-REXxz-Fyo9edsmIUR6BHUo-WYcwVRLa0OHxu9Pr_utVPhuI&usqp=CAU',
    name:'kamal',
    designation:'Angular developer',
    salary:'250000',
        code:3

    },
    {
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVDD_D0mDmK0UyXIh-yz-REXxz-Fyo9edsmIUR6BHUo-WYcwVRLa0OHxu9Pr_utVPhuI&usqp=CAU',
        name:'nimal',
        designation:'React developer',
        salary:'78000',
        code:4
    }


]
const customerNames = ['kamal','niamal','faslan'];



// const names =
// console.log(names);

/*===========index/ uniqe key=================*/
/*index is uniqe code for each object => if noerror will occure in console
* each div/element have now uniqe index
* this manage by react
* */

/*===========index/ uniqe key=================*/
function userManager(){
    return(
        <div className='wrapper'>
            <SearchForm />
            <hr/>
            {users.map((user)=>{
                // console.log(index);
                // const {avatar, name, designation, salary, code } = selectedUser;
                return <User {...user}  key={user.code}/>
                /*spread{...} => direct passing the object*/
            })}

        </div>
    );
}
const User = (props)=>{
    console.log(props)
    const {avatar, name, designation, salary } = props;
    console.log(props)
    return(
        <div className='user-outer'>
            <Avatar avatar={avatar}/>
            <UserData name={name} designation={designation} salary={salary}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </UserData>
        </div>
    );
}

const UserData = ({name,designation,salary, children}) =>{
/*    const printData=(e)=>{
        console.log(name);
    }*/

    console.log(children)
    return(
        <div className='user-Data'>
            <UserName name={name} />
            <Designation designation={designation} />
            <Salary salary={salary} />
            <p>
                {children}
            </p>

            <button style={{cursor:'pointer'}} onClick={(e)=>{
                console.log(name);
            }} >Print Data</button>
        </div>

    );
}
const SearchForm=()=>{
    return (
        <div className='search-outer'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log('manageSubmitEvent')
            }
            }>
                <input type="search" name={'serachtext'}  onChange={(e)=>{
                    console.log(e.target.value)
                }} />
                | <button type={"button"} onClick={(e)=>{
                console.log('manageClickEvent')
            }} >Srarch Here</button>
            </form>
        </div>
    );
}

const Avatar = ({avatar})=>{
    return (
        <div className= 'avatar-outer'>
            <img src={avatar}
                 alt="avatar1"/>
        </div>
    );
}

const UserName = ({name})=>{

    const inlineStyle={
        color:'#3498db',
        margin:0
    }
    return (
        <h1 style={inlineStyle}>{name}</h1>
    );
}

const Designation = ({designation})=>{

    return (
        <h3 style={{fontStyle:'italic',margin:0 }}>{designation}</h3>
    );
}

const Salary = ({salary})=>{
    return (
        <h3 style={{fontStyle:'italic',margin:0}}>{salary}</h3>
    );
}

export default userManager;