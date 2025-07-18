const slugify = require("slugify");
const Store = require('../models/Store');

const generateUniqueSlug = async(storeName)=>{
  const baseSlug = slugify(storeName, {lower:true});
  let count = 1;
  let slug = baseSlug;

  while(await Store.findOne({slug})){
    slug = `${baseSlug}-${count++}`;
  }
  return slug;
}

module.exports = generateUniqueSlug;