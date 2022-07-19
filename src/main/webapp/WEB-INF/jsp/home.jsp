<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sanction Process</title>
<link rel="stylesheet" href="../css/bootstrap.min.css" />
<link rel="stylesheet" href="../css/bootstrap-multiselect.css"
	type="text/css" />
<link rel="stylesheet" href="../css/bootstrap.css.map" />
<link rel="stylesheet" href="../css/jquery.dataTables.min.css" />
<!-- <link rel="stylesheet" href="../css/font-awesome.min.css" />
<link rel="stylesheet" href="../css/all.css" /> -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/jquery.validate.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/bootstrap-multiselect.js"></script>
<script type="text/javascript" src="../js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="../js/popper.min.js"></script>




<style type="text/css">
.pnl-heading {
	background-color: #337872;
	height: 40px;
	text-align: center;
	padding-top: 10px;
	font-family: inherit;
	font-weight: bold;
	font-size: large;
	/* color: aliceblue; */
}

.col-user-id {
	margin-bottom: 15px;
	margin-top: 15px;
	float: right;
	color: cadetblue;
}

.btn-desgn {
	padding: 0px 25px;
	font-size: 18px;
	line-height: 1.3333333;
	border-radius: 8px;
	margin-left: 10px;
	margin-right: 10px;
	width: 102px;
}

.btn-add-delt {
	text-align-last: center;
}

table.dataTable thead tr th {
	border-right: 1px solid #ddd !important;
}

table.dataTable thead tr {
	background-color: #488AC7;
	width: bold;
	width: 150px;
	color: aliceblue;
}

/*  tr:nth-child(even) {
            background-color: Lightgreen !important;
        } */
.even-row {
	background-color: #82CAFF !important;
}

.update, .edit, .cancel, .delete,.tpupdate, .tpedit, .tpcancel, .tpdelete {
	font-size: 14px;
	padding: 0px 5px;
	border-radius: 5px;
	transition-duration: 0.4s;
	background-color: white;
	color: black;
	border: 2px solid #000000;
}

.update:hover,.tpupdate:hover {
	border: 2px solid #4CAF50;
	background-color: #4CAF50;
	color: white;
}

.edit:hover,.tpedit:hover {
	border: 2px solid #FFA500;
	background-color: #FFA500;
	color: white;
}

.cancel:hover,.tpcancel:hover {
	border: 2px solid #008CBA;
	background-color: #008CBA;
	color: white;
}

.delete:hover,.tpdelete:hover {
	border: 2px solid #FF0000;
	background-color: #FF0000;
	color: white;
}

.add-new {
	float: right;
	height: 30px;
	font-weight: bold;
	font-size: 12px;
	text-shadow: none;
	min-width: 100px;
	border-radius: 50px;
	line-height: 13px;
	margin-right: 4px;
}

.drop-down {
	/*  display: block; */
	padding: 4px;
	margin-bottom: 20px;
	line-height: 1.42857143;
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 4px;
	-webkit-transition: border .2s ease-in-out;
	-o-transition: border .2s ease-in-out;
	transition: border .2s ease-in-out;
}

/* table.dataTable tbody tr:hover {
   background-color:#71d1eb !important;
} */
</style>


<script src="../script/sanctionProcess.js"></script>
<script src="../script/vesselControl.js"></script>
<script src="../script/tranPrtyControl.js"></script>
<script src="../script/common.js"></script>


</head>
<body>

	<br>

	<div class="panel panel-primary">
		<div class="panel-heading" style="background-color: #337872;">
			<center>
				<Strong style="font-size: x-large;">Sanction Details</Strong>
			</center>
		</div>

		<div class="container">
			<div class="col-user-id">
				<label> Welcome : ${USER_ID} </label>
			</div>
		</div>

		<form>
			<div class="form-row">
				<div class="col-md-4 mb-3" style="margin-top: 10px;">
					<label for="masterRef">Master Reference</label> <input type="text"
						class="form-control" id="masterRef" value=${MasterRef } readonly>

				</div>
				<div class="col-md-4 mb-3" style="margin-top: 10px;">
					<label for="eventRef">Event Reference</label> <input type="text"
						class="form-control" id="eventRef" value=${EventRef } readonly>
				</div>
				<div class="col-md-4 mb-3"
					style="margin-top: 10px; margin-bottom: 10px;">
					<label for="otherDtls">Other Details</label> <input type="text"
						class="form-control" id="otherDtls" placeholder="Other Details">
				</div>
			</div>
			<br>

			<div class="form-row">
				<div class="col-md-4 mb-3" style="margin-top: 10px;">
					<label for="otherDtls1">Other Details 1</label> <input type="text"
						class="form-control" id="otherDtls1" placeholder="Other Details 1">

				</div>
				<div class="col-md-4 mb-3" style="margin-top: 10px;">
					<label for="otherDtls2">Other Details 2</label> <input type="text"
						class="form-control" id="otherDtls2" placeholder="Other Details 2">
				</div>
				<div class="col-md-4 mb-3" style="margin-top: 10px;">
					<label for="remarks">Remarks</label> <input type="text"
						class="form-control" id="otherremarks" placeholder="Remarks">
					<br>
				</div>

			</div>
		</form>

		<form action="sanctionGrid" method="post">
			<div class="table-responsive table-wrap tableFixHead container-fluid">
				<table id="SanctionTable" class="display" width="120%"
					cellspacing="0">
					<thead>
						<tr>
							<th id="slNo">Serl.No</th>
							<th id="InvoiceNo">Invoice No</th>
							<th id="BillOfLadding">Bill Of Lading</th>
							<th id="LoadingDetails">Loading Details</th>
							<th id="DischargeDetails">Discharge Details</th>
							<th id="PortFrom">Port From</th>
							<th id="PortTo">Port To</th>
							<th id="PlaceOfReceipt">Place Of Receipt</th>
							<th id="Destination">Destination</th>
							<th id="Remarks">Remarks</th>
							<th id="Vessel" data-visible="false">Vessel</th>
							<th id="dummyVessel">Vessel</th>
							<th id="tranPrty" data-visible="false">Transacting Parties</th>
							<th id="dummyTranPrty">Transacting Parties</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${sanReq }" var="sanctionList">
							<tr>
								<td>${sanctionList.serlNo}</td>
								<td>${sanctionList.invoiceNo}</td>
								<td>${sanctionList.billOfLadding}</td>
								<td>${sanctionList.loadingDetails}</td>
								<td>${sanctionList.dischargeDetails}</td>
								<td>${sanctionList.portFrom}</td>
								<td>${sanctionList.portTo}</td>
								<td>${sanctionList.placeOfReceipt}</td>
								<td>${sanctionList.destination}</td>
								<td>${sanctionList.remarks}</td>
								<td>${sanctionList.vessel}</td>
								<td>...</td>
								<td>${sanctionList.tranPrty}</td>
								<td>...</td>

							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</form>

		<!-- Button trigger modal -->
		<div class="btn-add-delt">
			<button id="OnAdd" type="button" class="btn btn-info" data-req="Add">Add</button>
			<button id="OnUpdate" type="button" class="btn btn-info"
				data-req="Update">Update</button>
			<button id="OnDelete" type="button" class="btn btn-info"
				data-req="Delete">Delete</button>


		</div>
		<br>
	</div>

	<button id="OnSubmit" type="button" class="btn btn-success"
		data-dismiss="modal"
		style="font-variant: small-caps; float: right; right; margin-right: 100px; font-size: large;">Submit</button>
	<button id="OnCancel" type="button" class="btn btn-danger"
		data-dismiss="modal"
		style="font-variant: small-caps; float: right; right; margin-right: 50px; font-size: large;">Cancel</button>



	<!-- Modal -->
	<div class="modal fade" id="sanctionGridActnModal" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel">
		<!-- <div class="modal-dialog modal-lg" role="document"> -->
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Sanction Add/Update</h4>
				</div>
				<div class="modal-body">

					<form id="sanctionActnForm">
						<input type="hidden" class="form-control" id="reqtype" />
						<%@include file="dataAddorUpdate.jsp"%>

						<div class="col-sm-8">
							<h2>Vessel Details</h2>
						</div>

						<button type="button" class="btn btn-info add-new"
							id="btnAddVessel" style="margin-top: 20px;">
							<i class="fa fa-plus"></i> Add New
						</button>
						<div id="divAddVessel"></div>

						<!-- </form> -->

						<hr />

						<div class="col-sm-8">
							<h2>Transacting Parties</h2>

						</div>
						<button type="button" class="btn btn-info add-new"
							id="btnTranPrtyAdd" style="margin-top: 20px;">
							<i class="fa fa-plus"></i> Add New
						</button>

						<div id="divTranPrty" style="overflow: scroll; margin-top: 85px;"></div>

						<div class="modal-footer">
							<!-- <form id="sanctionFooterActn"> -->
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Close</button>
							<button id='Save' type="submit" class="btn btn-primary">
								Save changes</button>

						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

  <i class="fas fa-cloud"></i>
  <i class="fas fa-coffee"></i>
  <i class="fas fa-car"></i>
  <i class="fas fa-file"></i>
  <i class="fas fa-bars"></i>

</body>
</html>