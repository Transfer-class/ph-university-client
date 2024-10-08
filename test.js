const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

//

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashboard",
  },

  {
    name: "Course Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin ",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CreateFaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.path,
      level: "NAVLINK",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }
  return acc;
}, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// console.log(newArray);

const obj = {
  name: "Mezba",
  age: 23,
};
const obj2 = {
  name: "Mezba",
  age: 23,
  calcuate: () => {
    return "weight is ......";
  },
};

console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));
