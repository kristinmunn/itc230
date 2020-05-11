const expect = require("chai").expect;
const album = require("../lib/data");

describe("Album module", () => {
    it("returns requested album", () => {
      const result = album.getAlbum("Nothing Shocking");
      expect(result).to.deep.equal({title: "Nothing Shocking", artist:"Janes Addiction", studio:"Eldorado Studios", genre: "alternative rock"});
    });
    
    it("fails w/ invalid album", () => {
      const result = album.getAlbum("fake");
      expect(result).to.be.undefined;
    });
   });

describe("delete", () => {
    it("deletes requested album", () => {
      const result = album.deleteAlbum("Nothing Shocking");
      expect(result).to.be.true;
    });
    
    it("fails to delete album", () => {
      const result = album.deleteAlbum("fake");
      expect(result).to.be.false;
    });
   });  

   describe("add", () => {
    it("adds album", () => {
      const result = album.addAlbum({title: "Moondance", artist: "Van Morrison", studio: "Blah blah", genre: "folk"});
      expect(result).to.be.true;
    });
    
    it("fails to add album", () => {
      const result = album.addAlbum({title: 'Purple Rain', artist: 'Prince and The Revolution', studio: 'First Avenue', genre: 'pop' });
      expect(result).to.be.false;
    });
   });