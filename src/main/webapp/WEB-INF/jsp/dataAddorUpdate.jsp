<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Sanction Add/Update</title>
</head>
<body>



	<div class="form-row">

		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="serlNo">Serl No</label> <input type="text"
				class="form-control" id="serlNo" placeholder="serlNo" readonly>
		</div>

		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="invoiceNo">Invoice No</label> <input type="text"
				name="invoiceNo" class="form-control" id="invoiceNo"
				placeholder="Invoice No" required="required">
		</div>
		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="billOfLadding">Bill Of Ladding</label> <input type="text"
				class="form-control" id="billOfLadding"
				placeholder="Bill Of Ladding" required>
		</div>

	</div>


	<div class="form-row">

		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="loadingDetails">Loading Details</label> <input
				type="text" class="form-control" id="loadingDetails"
				placeholder="Loading Details">

		</div>

		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="dischargeDetails">Discharge Details</label> <input
				type="text" class="form-control" id="dischargeDetails"
				placeholder="Discharge Details">
		</div>
		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="portFrom">Port From</label> <input type="text"
				class="form-control" id="portFrom" placeholder="Port From">
		</div>
	</div>




	<div class="form-row">

		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="portTo">Port To</label> <input type="text"
				class="form-control" id="portTo" placeholder="Port To">
		</div>
		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="placeOfReceipt">Place Of Receipt</label> <input
				type="text" class="form-control" id="placeOfReceipt"
				placeholder="Place Of Receipt">
		</div>
		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="destination">Destination</label> <input type="text"
				class="form-control" id="destination" placeholder="Destination">
		</div>
	</div>


	<div class="form-row">
		<div class="col-md-4 mb-3" style="margin-top: 10px;">
			<label for="remarks">Remarks</label> <input type="text"
				class="form-control" id="vremarks" placeholder="Remarks">
		</div>
	</div>


	<!-- 
	<div class="form-row">

		<div class="col-md-4 mb-3"> -->

	<input type="hidden" class="form-control" id="vessel">

	<!-- 		</div>
		<div class="col-md-4 mb-3"> -->
	<input type="hidden" class="form-control" id="tranPrty">
	<!-- 		</div>
	</div>
 -->

	<div class="modal-footer"></div>


</body>
</html>