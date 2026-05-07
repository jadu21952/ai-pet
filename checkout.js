const d = window.SITE_DATA; const fmt=n=>`${d.currency}${Number(n).toLocaleString('en-IN')}`;
document.getElementById('subtotal').textContent=fmt(d.price); document.getElementById('total').textContent=fmt(d.price);
document.getElementById('checkoutForm').addEventListener('submit', async (e)=>{
 e.preventDefault(); const form=Object.fromEntries(new FormData(e.target).entries());
 const orderId='AI-PET-'+Date.now(); const amount=d.price*100;
 localStorage.setItem('aiPetOrder', JSON.stringify({...form, orderId, amount:d.price, paymentId:'demo_success_'+Date.now()}));
 if(!window.Razorpay || d.razorpayKeyId.includes('REPLACE')){ window.location.href='success.html?demo=1'; return; }
 const options={key:d.razorpayKeyId,amount,currency:'INR',name:d.brand,description:'AI PET Smart Companion',image:d.productImage,handler:function(res){localStorage.setItem('aiPetOrder',JSON.stringify({...form,orderId,paymentId:res.razorpay_payment_id,amount:d.price}));window.location.href='success.html';},prefill:{name:form.name,email:form.email,contact:form.phone},theme:{color:'#7b3cff'},modal:{ondismiss:function(){}}};
 new Razorpay(options).open();
});
