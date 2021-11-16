<script>
  /*
  import ContactCard from "./ContactCard.svelte";
  import { t, locale } from 'svelte-i18n'

  let name = "Max";
  let title = "";
  let image = "";
  let description = "";
  let formState = "empty";

	let contactList = [];

  function addContact() {
    if (
      name.trim().length == 0 ||
      title.trim().length == 0 ||
      image.trim().length == 0 ||
      description.trim().length == 0
    ) {
      formState = "invalid";
      return;
    }
		contactList = [...contactList,
			{
				id: Math.random(),
				name: name,
				jobTitle: title,
				description: description,
				userImage: image
			}]
    formState = "done";
  }

	function deleteFirst() {
		contactList = contactList.slice(1)
	}
  */
	// let apiCall = () => fetch('https://jsonplaceholder.typicode.com/todosr').then((res) => res.json())

	// let apiPromise = apiCall()

  export let languages;
  /*
	let selected;

  function handleDropdown() {
    $locale = selected
		console.log('my selected value', selected)
	}
  */
  let options = {
      key: "rzp_test_eGkWbu3i4wWdBJ",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://cdn.razorpay.com/logo.png",
      prefill: {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      handler: function(data) {
        console.log('payment :', data)
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
    };
  
  const ItemList = [
    { id: 1, price: 100, description: 'Item#1'},
    { id: 2, price: 200, description: 'Item#2'},
    { id: 3, price: 300, description: 'Item#3'}
  ]
  let totalPrice = 0

  function addItem(id) {
    let Item = ItemList.filter(item => item.id === id)
    totalPrice += Item[0].price
  }

  function handlePayment() {    
    options.amount = totalPrice * 100
    let rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  }
</script>

<style>
  .pay-btn {
    margin-top: 20px;
  }
</style>

<!--
<form id="form">
  <div>{$t('happy')}</div>
  <select bind:value={selected} on:change|stopPropagation={handleDropdown}>
		{#each languages as question (question.name)}
			<option value={question.name}>
				{question.name}
			</option>
		{/each}
	</select>
  
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
	<button on:click|preventDefault={addContact}>Add Contact Card</button>
</form>
-->

{#each ItemList as Item (Item.id)}
  <div>
    <div>{Item.description}</div>
    <div>Price Rs: {Item.price}</div>
    <button on:click={() => addItem(Item.id)}>Add</button>
  </div>
{/each}
<button class="pay-btn" on:click|preventDefault={handlePayment}>Pay {totalPrice || ''}</button>


<!--
<button on:click={() => {contactList = contactList.slice(1)}}>Delete First</button>


{#if formState === 'done'}
  <ContactCard
    userName={name}
    jobTitle={title}
    {description}
    userImage={image} />
{:else if formState === 'invalid'}
  <p>Invalid input.</p>
{:else}
  <p>Please enter some data and hit the button!</p>
{/if}

{#each contactList as contact, i (contact.id)}
	<h1>{i}</h1>
	<ContactCard
		userName={contact.name}
		jobTitle={contact.jobTitle}
		description = {contact.description}
		userImage={contact.userImage}
	/>
{/each}

{#await apiPromise}
	<p>Loading...</p>
{:then datas}
	{#each datas as data, index (data.id)}
		<div>{index} {data.title}</div>
	{/each}
{:catch err}
	<div>{err.message}</div>
{/await}
-->