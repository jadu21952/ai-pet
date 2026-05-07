const d=window.SITE_DATA; const fmt=n=>`${d.currency}${Number(n).toLocaleString('en-IN')}`;
const order=JSON.parse(localStorage.getItem('aiPetOrder')||'{}');
document.getElementById('orderId').textContent=order.orderId||'AI-PET-DEMO';
document.getElementById('paymentId').textContent=order.paymentId||'Demo Payment';
document.getElementById('dateTime').textContent=new Date().toLocaleString('en-IN');
document.getElementById('customerName').textContent=order.name||'Customer';
document.getElementById('paidAmount').textContent=fmt(order.amount||d.price);
document.getElementById('addressText').textContent=[order.name,order.address1,order.address2,order.city,order.state,order.pincode,order.country].filter(Boolean).join(', ')||'Your address';
document.getElementById('waSupport').href=`https://wa.me/${d.supportWhatsApp}?text=${encodeURIComponent('Hi, I need support for my AI PET order '+(order.orderId||''))}`;
