const onProfile = () => {
  for (let i = 0; i < targetprofile.length; i++) {
    targetprofile[i].style.visibility = 'visible';
  }
  console.log(targetprofile.length);
};
const onInteresting = (event) => {
  for (let i = 0; i < targetprofile.length; i++) {
    targetinteresting[i].style.visibility = 'visible';
  }
};
