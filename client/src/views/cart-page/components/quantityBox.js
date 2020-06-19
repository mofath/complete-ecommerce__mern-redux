import React from "react"

const QuantityBox = () => {
    return (
        <div class="center">
            <div class="input-group">

                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-minus"></span>
                    </button>
                </span>

                <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10" />

                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default QuantityBox;