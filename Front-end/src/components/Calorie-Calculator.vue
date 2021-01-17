<template>
  <div class="calorie-container">

    <h1 class="title"><font-awesome-icon icon="heartbeat"/> Calorie Calculator </h1>
    <div class="entry header">
    <div class="long">Description</div>
    <div class="short">Calories</div>
    <div class="short extra-space">Fat</div>
    <div class="short">Carbs</div>
    <div class="short">Protein</div>
    </div>

    <div class="entry" v-for="entry in entries" transition="fade" :key="entry.id">
    <input type="text" :value="entry.description" class="long">
    <input type="number" :value="entry.calorie" class="short">
    <input type="number" :value="entry.fat" class="short">
    <input type="number" :value="entry.carbohydrate" class="short">
    <input type="number" :value="entry.protein" class="short">
    <el-button class="delete_button" size="mini" type="danger" icon="el-icon-delete" circle @click="deleteEntry(entry.id)"></el-button>
    </div>

    <div class="totals">
    <div class="long">Totals:</div>
    <div class="short">{{ totalCalories }}</div>
    <div class="short">{{ totalFat }}</div>
    <div class="short">{{ totalCarbs }}</div>
    <div class="short">{{ totalProtein }}</div>
    </div>

    <div class="new">
    <input type="text" v-model="newDescription" v-on:keyup.enter="addEntry" class="long" placeholder="Description">
    <input type="number" v-model="newCalories" v-on:keyup.enter="addEntry" class="short" placeholder="Calories">
    <input type="number" v-model="newFat" v-on:keyup.enter="addEntry" class="short" placeholder="Fat">
    <input type="number" v-model="newCarbs" v-on:keyup.enter="addEntry" class="short" placeholder="Carbs">
    <input type="number" v-model="newProtein" v-on:keyup.enter="addEntry" class="short" placeholder="Protein">
    <el-button class="submit_button" type="primary" icon="el-icon-edit" circle @click="addEntry()"></el-button>
    </div>

  </div>
</template>

<script >
  export default {
    data() {
      return {
        index: -1,
        entries: [],
        totalCalories: 0,
        totalFat: 0,
        totalCarbs: 0,
        totalProtein: 0,
      }
    },
    methods: {
      addEntry() {
        this.entries.push(
          {id: this.index+1, 
           description: this.newDescription,
           calorie: parseInt(this.newCalories),
           fat: parseInt(this.newFat),
           carbohydrate: parseInt(this.newCarbs),
           protein: parseInt(this.newProtein),
          }, 
        )
        this.index += 1;
        this.totalCalories += parseInt(this.newCalories);
        this.totalFat += parseInt(this.newFat);
        this.totalCarbs += parseInt(this.newCarbs);
        this.totalProtein += parseInt(this.newProtein);
      },
      deleteEntry(id) {
        this.index -= 1;
        this.totalCalories -= this.entries[id].calorie;
        this.totalFat -= this.entries[id].fat;
        this.totalCarbs -= this.entries[id].carbohydrate;
        this.totalProtein -= this.entries[id].protein;
        this.entries.splice(id, 1);
      }
    }
  }
</script>

<style lang="less" scoped>

.calorie-container {
  margin-left: 20%;
  margin-right: 20%;
  margin: 3rem auto;
  width: 640px;
  padding: 1rem 2rem;
  background: #fafafa;
  box-shadow: 3px 3px 3px 0 rgba(black, .05);
  border-radius: 5px;
}

.title {
  font-weight: 100;
  color: #B2DFDB;
  margin:-1rem -2rem 1rem;
  padding: 1rem 2rem;
  background:#009688;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  text-align: center;
  overflow:hidden;
}

.entry, .new {
  font-size: 0;
  position: relative;
}
.entry + .entry {
  margin-top: 2.25%;
}
.long, .short {
  font-size: .8rem;
  display: inline-block;
  justify-content: space-between;
  margin: 0 2.25% 0 0;
  
}
.header {
  margin: -1rem -2rem 1rem;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  .long, .short {
    font-size: 1rem;
  }
}
.long {
  width: 30%; 
}
.short {
  width: 12%;
  &:last-child {
    margin-right: 0;
  }
}

.totals {
  color: rgba(black, .65);
  margin: 1.5rem -2rem;
  background:rgba(black, .075);
  border: 1px solid rgba(black, .15);
  border-left: 0;
  border-right: 0;
  padding: 1rem 2rem;
  .long, .short {
    font-weight: 900;
    font-size: 1.2rem;
  }
  .long {
    font-weight: 400;
    text-align: right;
  }
  .short {
    text-align: center;
  }
}
.extra-space {
  margin-left: 30px;
}

.fade-transition {
  transition: all .3s ease;
  opacity: 1;
  height: 1.5rem;
}

.fade-enter, .fade-leave {
  opacity: 0;
  height: 0;
}

input {
  transition: all .15s ease-in-out;
  margin: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(black, .15);
  padding: .15rem;
  color: rgba(black, .5);
  &:hover {
    color: rgba(black, .75);
    border-color: rgba(black, .75);
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid black;
    margin-bottom: -2px;
  }
}

.submit_button {
  position: absolute;
  right: -3.25rem;
  top: -.75rem;
  display: block;
  // background-color: #009688;
  // border-color: #009688;
  font-size: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  color: #fafafa;
}

.delete_button {
  position: absolute;
  right: -1rem;
  top: -.5rem;
  font-size: 1rem;
  line-height: 1rem;
}
</style>